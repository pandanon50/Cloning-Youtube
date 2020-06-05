import routes from "../routes";
import Video from "../model/Video";

export const home = async (req,res)=>{

    const videos =  await Video.find({});
    try{
        res.render("home", {pageTitle : "Home" , videos});
    }catch(error){
        console.log(error);
        res.render("home", {pageTitle : "Home" , videos:[]});
    }
} 


export const search = (req,res)=>
{
    const {
        query: {term : searchingBy}
    } = req;
    res.render("search", {pageTitle : "search", searchingBy , videos });
};

export const getUpload = (req,res)=> 
res.render("upload", {pageTitle : "upload"});

export const postUpload = async (req,res)=> 
{
    const{
        body : {
            title,description
        },
        file : {
            path
        }
    } = req;
    const newVideo = await Video.create({
        fileUrl : path,
        title : title,
        description : description
    });
    console.log(newVideo);
    //To Do : Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
}

export const video_detail = (req,res)=>
 res.render("videoDetail", {pageTitle : "Video Detail"});

export const edit_video = (req,res)=> 
res.render("editVideo", {pageTitle : "Edit Video"});

export const delete_video = (reVres)=>
 res.render("deleteVideo", {pageTitle : "Delete Video"});

