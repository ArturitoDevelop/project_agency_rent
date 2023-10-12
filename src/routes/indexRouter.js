import express from 'express';
import { Post, Picture } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allposts = await Post.findAll({ include: Picture });
  res.render('Layout', { allposts });
});

export default router;
