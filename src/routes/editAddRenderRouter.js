import express from 'express';
import { Post, Category, Picture, Favorite } from '../../db/models';

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

editAddRenderRouter.get('/house/:id', async (req, res) => {
  const houseId = req.params.id;

  try {
    const house = await Post.findByPk(houseId, {
      include: [Picture, Category, Favorite],
    });
    return res.render('Layout', { house });
  } catch (error) {
    return res.status(500).json({ message: 'Ошибка' });
  }
});



export default editAddRenderRouter;
