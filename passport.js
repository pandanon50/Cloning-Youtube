import passport from 'passport';
import GithubStrategy from 'passport-github';
import dotenv from 'dotenv';
import User from './model/User';
import routes from './routes';
import { githubLoginCallback } from './controller/userController';

dotenv.config();

passport.use(User.createStrategy()); // passport 전략 사용

passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GH_ID,
            clientSecret: process.env.GH_SECRET,
            callbackURL: `http://localhost:8000${routes.githubCallback}`,
        },
        githubLoginCallback
    )
);

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());
