import express from 'express';

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

export default loginRouter;
