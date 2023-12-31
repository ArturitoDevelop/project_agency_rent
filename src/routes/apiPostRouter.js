import express from 'express';
import fs from 'fs/promises';
import sharp from 'sharp';
import { Post, Picture, Favorite } from '../../db/models';
import upload from '../middlewares/multerLoad';

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

apiPostRouter.post('/favorite/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.session?.user?.id;
    const existingFavorite = await Favorite.findOne({
      where: {
        user_id: userId,
        post_id: id,
      },
    });

    if (existingFavorite) {
      return res.status(400).json({ message: "Запись уже существует в избранном" });
    }
    await Favorite.create({
      user_id: userId,
      post_id: id,
    });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Произошла ошибка при добавлении в избранное" });
  }
});

apiPostRouter.delete('/favorite/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // const Fav = await Favorite.findOne({
    //   where: {
    //     user_id: req.session?.user?.id,
    //     post_id: id,
    //   },
    // });
    // await Fav.destroy();
    await Favorite.destroy({ where: {
       post_id: req.params.id,
      user_id: req.session?.user?.id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

apiPostRouter.post('/add', upload.array('files', 3), async (req, res) => {
  try {
    const { title, description, price, cat_id } = req.body;
    if (!req.files || req.files.length === 0) {
      return res.status(401).json({ message: 'Files not found' });
    }

    const images = [];

    for (const file of req.files) {
      const name = `${Date.now()}.webp`;
      const outputBuffer = await sharp(file.buffer).webp().toBuffer();
      await fs.writeFile(`./public/img/${name}`, outputBuffer);

      images.push({ img: name });
    }

    const data = await Post.create({
      cat_id,
      title,
      description,
      price,
    });

    for (const image of images) {
      image.post_id = data.id;
    }

    await Picture.bulkCreate(images);

    res.status(200).json(data);
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

apiPostRouter.post('/filter/:value', async (req, res) => {
  const { value } = req.params;
  try {
    const { value } = req.params;
    const data = await Post.findAll({
      where: { cat_id: value },
      include: Picture,
    });
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
});

export default apiPostRouter;
