const User = require('../models/User');
const Appointment = require('../models/Appointment');
module.exports = async (req, res) => {
    try {
        const appointments = await Appointment.find({
            date: req.body.date, isTimeSlotAvailable: true
        });

        const user = await User.findOne({
            _id: req.session.userId
        });

        if (appointments.length > 0) {
            console.log("Appointments : " + appointments);
            res.render('g2test', { userId: req.session.userId, usertype: req.session.usertype, appointments: appointments, user: user })
        }
        else {
            res.render('g2test', { userId: req.session.userId, usertype: req.session.usertype, message: "No appointments available for selected date. Please select alternate date." })
        }
    }
    catch (error) {
        console.log(error);
    }
};