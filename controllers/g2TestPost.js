const User = require('../models/User');

module.exports = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.session.userId, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            licensenumber: req.body.licensenumber,
            age: req.body.age,
            dob: req.body.dob,
            car_details: {
                make: req.body.make,
                model: req.body.model,
                year: req.body.year,
                platno: req.body.platno
            }
        });
        console.log(user);
        res.render('dashboard', { userId: req.session.userId, usertype: req.session.usertype });
    }
    catch (error) {
        console.log(error);
    }
}