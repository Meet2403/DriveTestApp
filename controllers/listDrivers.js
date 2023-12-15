const User = require('../models/User');
const Appointment = require('../models/Appointment');
module.exports = async (req, res) => {
    try {
        console.log(req.body);

        if (req.body.test_type == 'G') {
            const users = await User.find({ test_type: req.body.test_type, result_G: req.body.result });
            console.log(users.length);
            if (users.length != 0)
                res.render('drivers', { userId: req.session.userId, usertype: req.session.usertype, users: users })
            else {
                res.render('drivers', { userId: req.session.userId, usertype: req.session.usertype, message: "No drivers found" })
            }
        }
        else if (req.body.test_type == 'G2') {
            const users = await User.find({ test_type: req.body.test_type, result_G2: req.body.result })
            console.log(users);
            if (users.length != 0)
                res.render('drivers', { userId: req.session.userId, usertype: req.session.usertype, users: users })
            else {
                res.render('drivers', { userId: req.session.userId, usertype: req.session.usertype, message: "No drivers found" })
            }

        }
    }
    catch (error) {
        console.log(error);
    }
};