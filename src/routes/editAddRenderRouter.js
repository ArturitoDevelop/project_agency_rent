import express from 'express';
import { Post, Category } from '../../db/models';

const editAddRenderRouter = express.Router();

editAddRenderRouter.get('/add', async (req, res) => {
  const allCategory = await Category.findAll();
  res.render('Layout', { allCategory });
});

editAddRenderRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const allCategory = await Category.findAll();
  const myPostId = await Post.findByPk(id);
  res.render('Layout', { myPostId, allCategory });
});

export default editAddRenderRouter;
