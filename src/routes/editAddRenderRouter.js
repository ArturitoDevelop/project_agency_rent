import express from 'express'

const editAddRenderRouter = express.Router();


editAddRenderRouter.get('/add', async (req, res) => {
    res.render('Layout', {});
  });

  editAddRenderRouter.get('/:id', async (req, res) => {
    res.render('Layout', {});
  });

export default editAddRenderRouter