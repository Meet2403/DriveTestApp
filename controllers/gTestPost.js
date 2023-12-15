const User = require('../models/User');
module.exports = async (req, res) => {
    try {
        console.log("Request: " + req.body);
        await User.findByIdAndUpdate(req.session.userId, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            licensenumber: req.body.licensenumber,
            age: req.body.age,
            dob: req.body.dob,
            test_type: "G",
            car_details: {
                make: req.body.make,
                model: req.body.model,
                year: req.body.year,
                platno: req.body.platno
            }
        });
        res.render('dashboard', { userId: req.session.userId, usertype: req.session.usertype });
    }
    catch (error) {
        console.log(error);
    }
};