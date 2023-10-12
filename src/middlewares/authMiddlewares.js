export const apiProtectMiddleWare = (req, res, next) => {
  if (!req.session.user) {
    res.sendStatus(401);
    return;
  }
  next();
};

export const signInUserMiddleware = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/');
    return;
  }
  next();
};

export const signUpUserMiddleware = (req, res, next) => {
    if (req.session.user) {
      res.sendStatus(401);
 
    }
    next();
  };
