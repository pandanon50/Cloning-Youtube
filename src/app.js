import express from 'express';
import 'core-js';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
// eslint-disable-next-line import/no-extraneous-dependencies
import bodyParser from 'body-parser';
import passport from 'passport';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import apiRouter from './routers/apiRouter';
import routes from './routes';
import { localsMiddleware } from './middlewares';

import './passport';

dotenv.config();

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set('view engine', 'pug');
app.use('/uploads', express.static('uploads'));
app.use('/static', express.static('static'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
    session({
        // secret : 무작위 문자열로 바꿔줌.(required)
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CookieStore({ mongooseConnection: mongoose.connection }),
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
