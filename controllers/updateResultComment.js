const User = require('../models/User');
module.exports = async (req, res) => {

    try {
        console.log(req.body);
        if (req.body.test_type == "G") {
            if (req.body.result != "default") {
                await User.findByIdAndUpdate(req.body._id, {
                    result_G: req.body.result,
                    comment_G: req.body.comment
                });
            }
            else {
                await User.findByIdAndUpdate(req.body._id, {
                    comment: req.body.comment
                });
            }
        }
        else if (req.body.test_type == "G2") {
            if (req.body.result != "default") {
                await User.findByIdAndUpdate(req.body._id, {
                    result_G2: req.body.result,
                    comment_G2: req.body.comment
                });
            }
            else {
                await User.findByIdAndUpdate(req.body._id, {
                    comment: req.body.comment
                });
            }
        }

        res.render('examiner', { userId: req.session.userId, usertype: req.session.usertype, message: "Driver Comments and Result updated successfully." });

    }
    catch (error) {
        console.log(error);

    }
};