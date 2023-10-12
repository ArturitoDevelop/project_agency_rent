import express from 'express';
import { Post, Picture, Favorite } from '../../db/models';

const favoriteRouter = express.Router();

favoriteRouter.get('/', async (req, res) => {
    const favoritePosts = await Favorite.findAll({
      where: {
        user_id: req.user.id
      },
      include: [
        {
          model: Post,
          include: Picture
        }
      ]
    });
    res.render('Layout', { favoritePosts });
  });
  
  export default favoriteRouter;
