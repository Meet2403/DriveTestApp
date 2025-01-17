const User = require('../models/User');
 const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username }).exec();
        if (user) {
             const same = await bcrypt.compare(password, user.password);
             if (same) {
                req.session.userId = user._id;
                req.session.usertype = user.usertype;
                res.render('dashboard', { userId: req.session.userId, usertype: req.session.usertype });
            } else {
                res.render('login', { message: "Username or Password doesn't match.", userId: '' });
            }
        } else {
            res.render('login', { message: "Username doesn't exist. Please Sign Up.", userId: '' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during login');
    }
};
