export default function resLocals(req, res, next) {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session?.user;
  next();
}

export const apiProtectMiddleWare = (req, res, next) => {
  if (!req.session?.user) {
    return res.sendStatus(406);
  }
  next();
};
