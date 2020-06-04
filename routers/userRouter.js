import express from "express";
import routes from "../routes";


import { users, user_detail, edit_profile, change_password } from "../controller/userController";


const userRouter = express.Router();

userRouter.get(routes.users,users);
userRouter.get(routes.editProfile, edit_profile);
userRouter.get(routes.changePassword, change_password);
userRouter.get(routes.userDetail(),user_detail);



export default userRouter;