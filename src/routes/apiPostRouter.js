import express from 'express';
import { Post, Picture } from '../../db/models';

const apiPostRouter = express.Router();

apiPostRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (req.session.user.isAdmin === true) {
      const post = await Post.findByPk(id);
      await post.destroy();
    }
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

apiPostRouter.post('/add', async (req, res) => {
  try {
    if (req.session.user.isAdmin === true) {
      const { title, description, price, cat_id } = req.body;
      const data = await Post.create({
        title,
        description,
        price,
        cat_id,
      });
      res.status(200).json(data);
    }
  } catch (error) {
    console.error('Ошибка при добавлении поста:', error);
  }
});

// update post
apiPostRouter.patch('/update/:id', async (req, res) => {
  try {
    if (req.session.user.isAdmin === true) {
      const updatePost = await Post.update(
        {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
        },
        {
          where: { id: req.params.id },
        },
      );
      res.status(200).json(updatePost);
    }
  } catch (error) {
    console.error('Ошибка при обновлении поста:', error);
  }
});

export default apiPostRouter;
