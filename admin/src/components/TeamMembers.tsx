import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsTrash, BsPerson, BsShieldCheck } from 'react-icons/bs';
import './TeamMembers.css';

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
}

const TeamMembers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Get token from localStorage (set after login)
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch users');
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string, userName: string) => {
    if (!window.confirm(`Are you sure you want to delete ${userName}?`)) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Remove user from state
      setUsers(users.filter(user => user._id !== userId));
      alert('User deleted successfully');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to delete user');
    }
  };

  if (loading) {
    return <div className="loading">Loading team members...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="team-members-container">
      <div className="header">
        <h1>Team Members</h1>
        <p className="subtitle">{users.length} Members</p>
      </div>

      <div className="members-grid">
        {users.map((user) => (
          <div key={user._id} className="member-card">
            <div className="member-avatar">
              <BsPerson size={40} />
            </div>
            
            <div className="member-info">
              <div className="member-name">
                {user.name}
                {user.role === 'admin' && (
                  <BsShieldCheck className="admin-badge" title="Admin" />
                )}
              </div>
              <div className="member-email">{user.email}</div>
              <div className="member-role">{user.role.toUpperCase()}</div>
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDeleteUser(user._id, user.name)}
              title="Delete user"
            >
              <BsTrash size={18} />
            </button>
          </div>
        ))}
      </div>

      {users.length === 0 && (
        <div className="no-users">No team members found</div>
      )}
    </div>
  );
};

export default TeamMembers;
