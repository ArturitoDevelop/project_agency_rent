import express from 'express'
import fs from 'fs/promises'
import sharp from 'sharp'
import { Post } from '../../db/models'
import upload from '../middlewares/multerLoad';


const editAddRouter = express.Router();

// add post
editAddRouter.post('/add', upload.single('file'), async (req, res) => {

    try {
        const { title, description, price } = req.body;
        if (!req.file) {
            return res.status(401).json({ message: 'File not found' })
        }
        const name = `${Date.now()}.webp`;

        const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();

        await fs.writeFile(`./public/img/${name}`, outputBuffer);


        const data = await Post.create({
            title,
            description,
            price,
        });
        res.status(200).json(data);
    } catch (error) {
        console.error("Ошибка при добавлении поста:", error);
    }
});

// update post
editAddRouter.patch('/update/:id', async (req, res) => {
    try {
        const updatePost = await Post.update(
            {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).json(updatePost);
    } catch (error) {
        console.error("Ошибка при обновлении поста:", error);
    }
});

editAddRouter.get('/update/:id', async (req, res) => {
    const { id } = req.params;
    const myPostId = await Post.findByPk(id);
    const initState = { myPostId };
    res.render('Layout', initState);
});

export default editAddRouter