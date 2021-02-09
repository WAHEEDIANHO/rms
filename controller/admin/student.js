const multer = require('multer');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const Model = require('../../model/schema');

const { Students, ClassModel } = Model;

//---------------Storage----------------------------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/student');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage }).single('file');

// const url = "mongodb+srv://OGIDI:WAHEEDianho@cluster0.v6rr3.mongodb.net/SRM?retryWrites=true&w=majority"

studentAdmission = (req, res) => {
  ClassModel.find({}, 'cname cnameNum').then(classes => {
    res.render('admin/add-student', { classes: classes });
  });
};

dostudentAdmission = (req, res) => {
  if (req.body.hasOwnProperty('fname')) {
    req.body.fname.toUpperCase();

    Students.create(req.body)
      .then(resp => {
        res.json(resp);
      })
      .catch(err => {
        res.json(err);
      });
  } else {
    upload(req, res, err => {
      //------------Todo after successful upload----------------//
      const wb = xlsx.readFile(
        `${__dirname}/../../uploads/student/${req.file.filename}`,
        { cellDates: true }
      );

      const ws = wb.Sheets['Student'];

      if (!ws) {
        const err = new Error();
        err.status = 404;
        err.message = 'Invalid Document';
        res.json(err);
        fs.unlinkSync(
          `${__dirname}/../../uploads/student/${req.file.filename}`
        );
        return err;
      } else {
        const data = xlsx.utils.sheet_to_json(ws);

        (async () => {
          const existuser = [];
          for (x in data) {
            const {
              fullname,
              dob,
              gender,
              sclass,
              roll_id,
              phone_no,
              address,
              email,
            } = data[x];
            const user = await Students.findOne({
              rollId: `SRM/2020/0${roll_id}`,
            });

            if (!user) {
              const newStu = await Students.create({
                fname: fullname.toUpperCase(),
                rollId: `SRM/2020/0${roll_id}`,
                gender,
                sclass,
                dob,
                phone_no,
                address,
                email,
              });
            } else {
              existuser.push(user.fname);
            }
          }
          if (existuser.length === 0) {
            res.json('sucess');
          } else {
            const err = new Error();
            err.status = 404;
            err.message = existuser;
            res.json(err);
          }
          fs.unlinkSync(
            `${__dirname}/../../uploads/student/${req.file.filename}`
          );
        })();
      }
    });
  }
};

manageStudent = (req, res) => {
  Students.find({}).then(docs => {
    res.render('admin/manage-student', {
      docs,
      url: req.url,
    });
  });
};

deleteStudent = (req, res) => {
  Students.findByIdAndDelete(req.params.id)
    .then(resp => res.json(resp))
    .catch(err => res.json(err));
};

getStudents = (req, res) => {
  req.params.sclass
    ? Students.find({ sclass: req.params.sclass }).then(docs => res.json(docs))
    : Students.find({}).then(docs => res.json(docs));
};

updateStudent = (req, res) => {
  Students.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(student => res.json('success'))
    .catch(err => res.json(err));
};
module.exports = {
  studentAdmission,
  dostudentAdmission,
  manageStudent,
  deleteStudent,
  getStudents,
  updateStudent,
};
