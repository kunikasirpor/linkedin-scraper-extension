import express from 'express';
import { Profile } from '../models/index.js';

const router = express.Router();

router.post('/profiles', async (req, res) => {
  try {
    const { name, url, about, bio, location, followerCount, connectionCount } = req.body;

    const profile = await Profile.create({
      name,
      url,
      about,
      bio,
      location,
       followerCount: followerCount === '' ? null : parseInt(followerCount, 10),
  connectionCount: connectionCount === '' ? null : parseInt(connectionCount, 10)
    });

    res.status(201).json(profile);
  } catch (err) {
    console.error('Error saving profile:', err);
    res.status(500).json({ error: 'Failed to save profile' });
  }
});

export default router;
