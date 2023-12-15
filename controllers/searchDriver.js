const User = require('../models/User');
module.exports = async (req, res) => {
    try {
        console.log(req.body);

        if (req.body.test_type == "G2") {
            const users = await User.find({ test_type: "G2", usertype: "driver" });
            console.log("G2: " + users);
            res.render('examiner', { userId: req.session.userId, usertype: req.session.usertype, users: users, })
        }
        else if (req.body.test_type == "G") {
            const users = await User.find({ test_type: "G", usertype: "driver" });
            console.log("G: " + users);
            res.render('examiner', { userId: req.session.userId, usertype: req.session.usertype, users: users, })
        }

    } catch (error) {
        console.log(error);
    }
};
