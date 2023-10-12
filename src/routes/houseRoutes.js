import { Router } from 'express';
import { Post, Picture, Category, Favorite } from '../../db/models';


const houseRoutes = Router();
houseRoutes.get('/:id', async (req, res) => {
    const houseId = req.params.id;
    // console.log(houseId)

    try {
      const house = await Post.findByPk(houseId, {
        include: [Picture, Category, Favorite]
      });
    //   console.log("PROVERKA NA NALICHCIE HOUSE",house)
      return res.render('Layout', { house });
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка' });
    }
});


export default houseRoutes;
