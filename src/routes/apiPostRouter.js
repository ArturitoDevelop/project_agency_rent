

import express from 'express';
import fs from 'fs/promises';
import sharp from 'sharp';
import { Post, Picture } from '../../db/models';
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
    console.log(id);
    const data = await Favorite.create({
      user_id: req.session?.user?.id,
      post_id: id,
    });
    console.log(data);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

apiPostRouter.post('/add', upload.array('files', 3), async (req, res) => {
  console.log(req.files, "-----------");
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
    console.error("Ошибка при добавлении поста:", error);
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