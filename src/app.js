const express = require('express'),
  controller = require('../controller'),
  admin = require('../controller/admin/admin'),
  path = require('path'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  config = require('../config'),
  student = require('../controller/student'),
  cookieSession = require('cookie-session');

const {isAuth, verifyUser, getToken} = require("../authentication");

const app = express();
const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(require("express-pdf"));
app.use('/public', express.static(`${__dirname}/../public`));
app.set('view engine', 'ejs');
app.use(
  cookieSession({
    name: config.session_name,
    keys: [config.session_secret],
    // saveUninitialized: false,
    // resave: false,
  })
);
//-------------DataBase------------------------------------------

mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('connected', () => {
    console.log('conected successfully to database');
    app.listen(port, () => console.log(`Example app listening on ${port} port!`));
})
    .on('error', err => {
        console.log(err);
    })
    .once('disconnected', () => {
        console.log('database disconnected');
    });

//-------------------------------Route----------------------------
//Home page
app.get('/', controller.home);

app.use(passport.initialize());
app.use(passport.session());

// Student Login
app.get('/student/login', student.login);
app.post('/student/result', student.getResult);

//admin
app.get('/admin/dashboard', isAuth, verifyUser, admin.doAfterLogin);
app.post('/admin/dashboard',
     passport.authenticate("local", { session: false, failureRedirect: "/"}),
    (req, res, next) => {
        console.log(req.user)
        const token = getToken({_id: req.user._id})
        req.session = { token }
        res.redirect("/admin/dashboard")
});
app.post('/crateadmin', admin.createAdmin);

//admin logout
app.get('/logout', admin.logout);

//subject
app.get('/admin/subject', isAuth, verifyUser, admin.subject);
app.post('/admin/subject', isAuth, verifyUser, admin.createSubject);
app.get(
  '/admin/manage-subject',
  isAuth, verifyUser,
  admin.manageSubjects
);
app.put('/admin/manage-subject/:id', admin.updateSubject);
app.delete(
  '/admin/manage-subject/:id',
  isAuth, verifyUser,
  admin.deleteSubject
);

//class
app.get('/admin/create-class', isAuth, verifyUser, admin.classCreate);
app.post('/admin/create-class', isAuth, verifyUser, admin.doClassCreate);
app.get('/admin/manage-classes', isAuth, verifyUser, admin.manageClasses);
app.delete(
  '/admin/manage-classes/:id',
  isAuth, verifyUser,
  admin.deleteClass
);

//student
app.get('/admin/add-student', isAuth, verifyUser, admin.studentAdmission);
app.post(
  '/admin/add-student',
  isAuth, verifyUser,
  admin.dostudentAdmission
);
app.get('/admin/manage-student', isAuth, verifyUser, admin.manageStudent);
app.delete(
  '/admin/manage-student/:id',
  isAuth, verifyUser,
  admin.deleteStudent
);
app.put('/admin/manage-student/:id', admin.updateStudent);

app.delete(
  '/admin/manage-classes/:id',
  isAuth, verifyUser,
  admin.deleteClass
);

//Result
app.get('/admin/add-result', isAuth, verifyUser, admin.result);
app.post('/admin/add-result', isAuth, verifyUser, admin.addResult);
app.get('/admin/manage-result', admin.manageResult);
app.delete('/admin/manage-result', admin.deleteResult);
app.put('/admin/manage-result/:id', admin.updateReSult);

//ApI
app.get('/classes', admin.getClass);
app.get('/students', admin.getStudent);
app.get('/students/:sclass', admin.getStudent);


