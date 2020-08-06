import express from 'express';
import passport from 'passport';
import routes from '../routes';
import { home, search } from '../controller/videoController';
import {
    getJoin,
    postJoin,
    postLogin,
    logout,
    getLogin,
    githubLogin,
    postGithubLogin,
    getMe,
    facebookLogin,
    postFacebookLogin,
    kakaoLogin,
    postKakaoLogin,
} from '../controller/userController';
import { onlyPublic, onlyPrivate } from '../middlewares';

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, passport.authenticate('github', { failureRedirect: '/login' }), postGithubLogin);
globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(routes.facebookCallback, passport.authenticate('facebook', { failureRedirect: '/login' }), postFacebookLogin);

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
    routes.kakoCallback,
    passport.authenticate('kakao', {
        failureRedirect: '#!/login',
    }),
    postKakaoLogin
);

export default globalRouter;