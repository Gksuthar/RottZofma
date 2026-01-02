import { useState, useEffect } from 'react'
import './App.css'
import TeamMembers from './components/TeamMembers'
import Login from './components/Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = (token: string) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'right' }}>
        <button onClick={handleLogout} style={{ padding: '8px 20px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
      <TeamMembers />
    </>
  )
}

export default App
