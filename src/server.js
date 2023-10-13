import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import path from 'path';
import sessionFileStore from 'session-file-store';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';


import editAddRenderRouter from './routes/editAddRenderRouter';
import apiPostRouter from './routes/apiPostRouter';
import authPageRouter from './routes/authPageRouter';
import loginRouter from './routes/loginRouter';
import apiAuthRouter from './routes/apiAuthRouter';
import favoriteRouter from './routes/favoriteRouter';
import { apiProtectMiddleWare } from './middlewares/authMiddlewares';



require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = sessionFileStore(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  store: new FileStore({}),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.engine('js', jsxRender);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});




app.use('/', indexRouter);
app.use('/api/post', apiProtectMiddleWare, apiPostRouter);
app.use('/post', editAddRenderRouter);
app.use('/favorites', favoriteRouter);

app.use('/authPage', authPageRouter);
app.use('/loginPage', loginRouter);
app.use('/api/auth', apiAuthRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
