import express, { Response } from 'express';
import User from '../models/User';
import { verifyToken, isAdmin, AuthRequest } from '../middleware/auth';

const router = express.Router();

// GET /api/admin/users - Get all users (Admin only)
router.get('/users', verifyToken, isAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
});

// GET /api/admin/users/:id - Get single user (Admin only)
router.get('/users/:id', verifyToken, isAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
});

// DELETE /api/admin/users/:id - Delete user (Admin only)
router.delete('/users/:id', verifyToken, isAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.params.id;

    // Prevent admin from deleting themselves
    if (req.user!.id === userId) {
      return res.status(400).json({ message: "You cannot delete yourself" });
    }

    // Check if user exists
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
    await User.findByIdAndDelete(userId);

    res.json({ 
      message: 'User deleted successfully',
      deletedUser: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
});

// PUT /api/admin/users/:id/role - Update user role (Admin only)
router.put('/users/:id/role', verifyToken, isAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const { role } = req.body;

    if (!role || !['user', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role. Must be "user" or "admin"' });
    }

    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.role = role;
    await user.save();

    res.json({ 
      message: 'User role updated successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
});

export default router;
