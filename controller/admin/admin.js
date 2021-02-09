const student = require('../student');
const classes = require('./class');
const subject = require('./subject');
const students = require('./student');
const results = require('./results');
const Staff = require('../../model/staff');
const { ClassModel, Subjects, Students } = require('../../model/schema');

verifyUser = (req, res) => {
  res.redirect('/admin/dashboard');
};

doAfterLogin = (req, res) => {
  (async () => {
    try {
      const StaffReg = await Staff.find({}),
        ClassesReg = await ClassModel.find({}),
        SubjectsReg = await Subjects.find({}),
        StudentsReg = await Students.find({}),
        user = await Staff.findById(req.user);
      let uploadResult = [];
      for (x in StudentsReg) {
        if (StudentsReg[x].result != 0) {
          uploadResult.push({
            name: StudentsReg[x].fname,
            totalResult: StudentsReg[x].result.length,
          });
        }
      }
      await uploadResult;
      res.render('admin/admin', {
        user,
        StaffReg,
        ClassesReg,
        SubjectsReg,
        StudentsReg,
        uploadResult,
      });
    } catch (error) {
      console.log(error);
    }
  })();
};

logout = (req, res) => {
  req.user ? req.session.destroy() && res.redirect('/') : res.redirect('/');
};

createAdmin = (req, res, next) => {
  req.body.pswrd = Staff.hashPswrd(req.body.pswrd);
  console.log(req.body.pswrd);
  Staff.create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => next(err));
};

module.exports = {
  doAfterLogin,
  logout,
  verifyUser,
  createAdmin,
  subject: subject.subject,
  createSubject: subject.createSubject,
  deleteSubject: subject.deleteSubject,
  updateSubject: subject.updateSubject,
  classCreate: classes.classCreate,
  doClassCreate: classes.doClassCreate,
  deleteClass: classes.deleteClass,
  studentAdmission: students.studentAdmission,
  dostudentAdmission: students.dostudentAdmission,
  manageClasses: classes.manageClasses,
  manageSubjects: subject.manageSubjects,
  manageStudent: students.manageStudent,
  deleteStudent: students.deleteStudent,
  updateStudent: students.updateStudent,
  result: results.result,
  addResult: results.addResult,
  manageResult: results.manageResult,
  deleteResult: results.deleteResult,
  updateReSult: results.updateReSult,
  getClass: classes.getClass,
  getStudent: students.getStudents,
};
