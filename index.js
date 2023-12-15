const express = require('express')
const path = require('path')
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose');
const { error } = require('console');
const User = require('./models/User.js');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const flash = require('connect-flash');

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressSession({
    secret: 'my secret',
    cookie: { maxAge: 500000 },
    saveUninitialized: false
}));
app.use(flash());

var mongoDbQuery = 'mongodb+srv://priya23rdmay:Donkymonky1@cluster0.7g1snxl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDbQuery, { useNewUrlParser: true });

const homeController = require('./controllers/home');
const loginController = require('./controllers/login');
const gTestController = require('./controllers/gTest');
const g2TestController = require('./controllers/g2Test');
const signUpController = require('./controllers/signup');
const postLoginController = require('./controllers/postLogin');
const postG2TestController = require('./controllers/g2TestPost');
const postGTestController = require('./controllers/gTestPost');
const logoutController = require('./controllers/logout');
const appointmentController = require('./controllers/appointment');
const appointmentPostController = require('./controllers/appointmentPost');
const g2AppointmentSearchController = require('./controllers/g2AppointmentSearch');
const g2AppointmentBookController = require('./controllers/g2AppointmentBook');
const gAppointmentSearchController = require('./controllers/gAppointmentSearch')
const gAppointmentBookController = require('./controllers/gAppointmentBook');
const examinerController = require('./controllers/examiner');
const searchDriverController = require('./controllers/searchDriver');
const updateResultCommentController = require('./controllers/updateResultComment');
const driversController = require('./controllers/drivers');
const driverSearchController = require('./controllers/listDrivers');

app.get('/', homeController);
app.get('/login', loginController);
app.get('/gtest', gTestController);
app.get('/g2test', g2TestController);
app.post('/signup', signUpController);
app.post('/postLogin', postLoginController);
app.post('/g2test/create', postG2TestController);
app.post('/gtest/update', postGTestController);
app.get('/logout', logoutController);
app.get('/appointment', appointmentController);
app.post('/addAppointment', appointmentPostController);
app.post('/appointmentSearch', g2AppointmentSearchController);
app.post('/appointmentSearchG', gAppointmentSearchController);
app.post('/bookAppointment', g2AppointmentBookController);
app.post('/bookAppointmentG', gAppointmentBookController);
app.get('/examiner', examinerController);
app.post('/search', searchDriverController);
app.post('/updateCommentsandResult', updateResultCommentController);
app.get('/drivers', driversController);
app.post('/driverSearch', driverSearchController);

// app.listen(4000, () => {
//     console.log('App listening on port 4000')
// })


let port = process.env.PORT;
if (port == null || port == "") {
port = 4000;
}
app.listen(port, ()=>{
console.log('App listening...')
})