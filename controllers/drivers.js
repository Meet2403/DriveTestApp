const User = require('../models/User');
module.exports = async (req, res) => {
    const user = await User.findOne({
        _id: req.session.userId
    });
    if (user != null && user) {
        res.render('drivers', { userId: req.session.userId, usertype: req.session.usertype, user: user });
    }
    else {
        res.render('drivers', { userId: req.session.userId, usertype: req.session.usertype });
    }
};