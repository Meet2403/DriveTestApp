const Appointment = require('../models/Appointment');
module.exports = async (req, res) => {

    try {
        const appointment = await Appointment.findOne({
            date: req.body.date, time: req.body.time
        });
        console.log("Appointment " + appointment);
        if (appointment == null) {
            const app = await Appointment.create({ ...req.body });
            res.redirect('/appointment');
        }
        else {
            const appointments = await Appointment.find({});
            res.render('appointment', { userId: req.session.userId, usertype: req.session.usertype, appointments: appointments, errors: req.flash('validationErrors'), message: "Appointment exists! Please select different date and time." });
        }
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            req.flash('validationErrors', validationErrors);
            console.error(validationErrors);
            console.error("Test");
            return res.redirect('/appointment');
        }
        console.log(error);

    }
};