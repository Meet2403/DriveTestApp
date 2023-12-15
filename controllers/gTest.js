const User = require('../models/User');
module.exports = async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.session.userId
        });
        if (user != null && user) {
            console.log(user.dob);
            res.render('gtest', { userId: req.session.userId, usertype: req.session.usertype, user: user });
        }
    }
    catch (error) {
        console.log(error);
    }
};
