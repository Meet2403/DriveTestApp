const User = require('../models/User');
const Appointment = require('../models/Appointment');
module.exports = async (req, res) => {
    try {
        const appointments = await Appointment.find({ isTimeSlotAvailable: true });
        res.render('appointment', { userId: req.session.userId, usertype: req.session.usertype, appointments: appointments, errors: req.flash('validationErrors') })
    } catch (error) {
        console.log(error);
    }
};
