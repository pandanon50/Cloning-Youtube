import { videos } from "../db";
import routes from "../routes";
export const home = (req,res)=> 
res.render("home", {pageTitle : "Home" , videos});

export const search = (req,res)=>
{
    const {
        query: {term : searchingBy}
    } = req;
    res.render("search", {pageTitle : "search", searchingBy , videos });
};

export const getUpload = (req,res)=> 
res.render("upload", {pageTitle : "upload"});

export const postUpload = (req,res)=> 
{
    const{
        body:{
            file,title,description
        }
    } = req;
    //To Do : Upload and save video
    res.redirect(routes.videoDetail(555));
}

export const video_detail = (req,res)=>
 res.render("videoDetail", {pageTitle : "Video Detail"});

export const edit_video = (req,res)=> 
res.render("editVideo", {pageTitle : "Edit Video"});

export const delete_video = (reVres)=>
 res.render("deleteVideo", {pageTitle : "Delete Video"});

