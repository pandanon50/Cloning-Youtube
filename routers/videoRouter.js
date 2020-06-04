import express from "express";
import routes from "../routes";

import {videos , video_detail , edit_video , delete_video, getUpload, postUpload } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload,postUpload);

videoRouter.get(routes.videoDetail(),video_detail);
videoRouter.get(routes.editVideo,edit_video);
videoRouter.get(routes.deleteVideo,delete_video);



export default videoRouter;