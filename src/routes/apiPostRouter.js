import express from 'express';
import { Post, Picture } from '../../db/models';

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

export default apiPostRouter;
