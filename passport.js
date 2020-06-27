import passport from 'passport';
import User from './model/User';

passport.use(User.createStrategy()); // passport 전략 사용

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());
