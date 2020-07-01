import express from 'express';
import routes from '../routes';

import { videoDetail, postEditVideo, getEditVideo, deleteVideo, getUpload, postUpload } from '../controller/videoController';
import { uploadVideo, onlyPrivate } from '../middlewares';

const videoRouter = express.Router();

// Upload Video
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail

videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
