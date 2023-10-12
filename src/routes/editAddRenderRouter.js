import express from 'express';
import { Post } from '../../db/models';

const editAddRenderRouter = express.Router();

editAddRenderRouter.get('/add', async (req, res) => {
  res.render('Layout', {});
});

editAddRenderRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const myPostId = await Post.findByPk(id);
  res.render('Layout', { myPostId });
});

export default editAddRenderRouter;
