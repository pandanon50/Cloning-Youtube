import passport from 'passport';
import GithubStrategy from 'passport-github';
import FacebookStrategy from 'passport-facebook';
import dotenv from 'dotenv';
import User from './model/User';
import routes from './routes';
import { githubLoginCallback, facebookLoginCallback } from './controller/userController';

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

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FB_ID,
            clientSecret: process.env.FB_SECRET,
            callbackURL: `https://chilly-dodo-83.serverless.social${routes.facebookCallback}`,
            profileFields: ['id', 'displayName', 'photos', 'email'],
            scope: ['public_profile', 'email'],
        },
        facebookLoginCallback
    )
);

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());
