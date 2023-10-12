import express from 'express';

const authPageRouter = express.Router();

authPageRouter.get('/', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

export default authPageRouter;
