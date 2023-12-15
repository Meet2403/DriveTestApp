const Appointment = require('../models/Appointment');
const User = require('../models/User');
module.exports = async (req, res) => {

    try {
        console.log(req.body);
        const req_body = JSON.stringify(req.body);
        const appointmentId = req_body.substring(req_body.indexOf("id") + 5, req_body.lastIndexOf("}") - 1);
        console.log(appointmentId);
        await Appointment.findByIdAndUpdate(appointmentId, {
            isTimeSlotAvailable: false
        });
        await User.findByIdAndUpdate(req.session.userId, {
            appointment_id: appointmentId,
            test_type: "G"
        });
        const user = await User.findOne({
            _id: req.session.userId
        });
        res.render('gtest', { userId: req.session.userId, usertype: req.session.usertype, message: "Appointment Booked Successfully.", user: user });
    }
    catch (error) {
        console.log(error);

    }
};