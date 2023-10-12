import express from 'express';
import { Post, Picture, Favorite } from '../../db/models';

const favoriteRouter = express.Router();

favoriteRouter.get('/', async (req, res) => {
    const data = await Favorite.findAll({
      where: {
        user_id: req.session.user.id
      },
      include: [
        {
          model: Post,
          include: Picture
        }
      ]
    });
    console.log(data);
    const favoritePosts = data.map(post => post.Post);
    res.render('Layout', { favoritePosts });
  });
  
  export default favoriteRouter;
