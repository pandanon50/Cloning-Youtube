import routes from "../routes";


export const getJoin = (req,res)=> 
{
    res.render("join",{pageTitle: "join"});
}

export const postJoin = (req,res)=> 
{
    const {
        body:{  name, email,password,password2}
    } = req;

    if(password!==password2){
        res.status(400);
        res.render("join",{pageTitle: "Join"});
    }
    else{
        //To do register User
        //To do Login In
        res.redirect(routes.home);
    }
};

export const getLogin = (req,res)=> 
res.render("login",{pageTitle: "login"});

export const postLogin = (req,res)=> {
    res.redirect(routes.home);
}


export const logout = (req,res)=> 
{
    res.redirect(routes.home);
}
export const users = (req,res)=> 
res.render("users",{pageTitle: "Users"});
export const user_detail = (req,res)=> 
res.render("userDetail",{pageTitle: "User Detail"});
export const edit_profile = (req,res)=> 
res.render("editProfile",{pageTitle: "Edit Profile"});
export const change_password = (req,res)=> 
res.render("changePassword",{pageTitle: "Change Password"});