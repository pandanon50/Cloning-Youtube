import routes from '../routes';
import User from '../model/User';

export const getJoin = (req, res) => {
    res.render('join', { pageTitle: 'join' });
};

export const postJoin = async (req, res) => {
    const {
        body: { name, email, password, password2 },
    } = req;

    if (password !== password2) {
        res.status(400);
        res.render('join', { pageTitle: 'Join' });
    } else {
        try {
            const user = await User({
                name,
                email,
            });
            User.register(user, password);
        } catch (error) {
            console.log(error);
        }
        // To do register User
        // To do Login In
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => res.render('login', { pageTitle: 'login' });

export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    res.redirect(routes.home);
};
export const users = (req, res) => res.render('users', { pageTitle: 'Users' });
export const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'User Detail' });
export const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'Edit Profile' });
export const changePassword = (req, res) => res.render('changePassword', { pageTitle: 'Change Password' });
