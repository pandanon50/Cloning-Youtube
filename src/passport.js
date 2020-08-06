import passport from 'passport';
import GithubStrategy from 'passport-github';
import FacebookStrategy from 'passport-facebook';
import KakaoStrategy from 'passport-kakao';
import dotenv from 'dotenv';
import User from './model/User';
import routes from './routes';
import { githubLoginCallback, facebookLoginCallback, kakaoLoginCallback } from './controller/userController';

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

passport.use(
    new KakaoStrategy(
        {
            clientID: process.env.KK_SECRET,
            callbackURL: 'https://soft-panther-73.serverless.social/oauth',
        },
        kakaoLoginCallback
    )
);

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());
