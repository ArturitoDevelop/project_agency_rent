import express from 'express';
import { Post, Picture } from '../../db/models';
import {Favorite} from '../../db/models';

const apiPostRouter = express.Router();

apiPostRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (res.session.user.isAdmin === true) {
      const post = await Post.findByPk(id);
      await post.destroy();
      res.sendStatus(200);
    }
  } catch (err) {
    console.log(err);
  }
});

apiPostRouter.post('/favorite/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
     const data = await Favorite.create({
      user_id: req.session?.user?.id,
      post_id: id,
    })
    console.log(data)
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

export default apiPostRouter;
