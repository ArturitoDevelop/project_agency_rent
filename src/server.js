import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import resLocals from './middlewares/resLocals';
import editAddRouter from './routes/editAddRouter'
import editAddRenderRouter from './routes/editAddRenderRouter';
import apiPostRouter from './routes/apiPostRouter';
import authPageRouter from './routes/authPageRouter';
import loginRouter from './routes/loginRouter';
import apiAuthRouter from './routes/apiAuthRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(resLocals);

app.use('/', indexRouter);
app.use('/api/post',  apiPostRouter);
app.use('/api', apiRouter);
app.use('/api/post', editAddRouter);
app.use('/post', editAddRenderRouter);
app.use('/authPage', authPageRouter)
app.use('/loginPage', loginRouter)
app.use('/api/auth', apiAuthRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
