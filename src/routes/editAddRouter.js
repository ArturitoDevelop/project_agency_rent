import express from 'express'
import { Post } from '../../db/models'

const editAddRouter = express.Router();

// add post
editAddRouter.post('/add', async (req, res) => {
    try {
        const { title, description, price } = req.body;
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
    const {id} = req.params;
    const myPostId = await Post.findByPk(id);
    const initState = { myPostId };
    res.render('Layout', initState);
  });

export default editAddRouter