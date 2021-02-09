const { Students } = require('../model/schema');

/////////// Student Login ///////////////////////
login = (req, res) => {
  res.render('student');
};
/////////////////// end /////////////////////////

//////// getting result /////////////////////////////
getResult = (req, res, next) => {
  if (!req.body) {
    res.json({ err: "u didn't input anything" });
  } else {
    const { rollId, sclass } = req.body;
    Students.findOne({ rollId: rollId })
      .then(student => {
        if (student.sclass === sclass) {
          res.render('result', {
            student: student,
          });
        } else {
          const err = new Error();
          err.status = 404;
          err.message = 'Student class doesn"t match rollID: ' + rollId;
          res.json(err);
        }
      })
      .catch(err => next(err));
  }
};
///////////////////////////// end //////////////////////////

module.exports = {
  login,
  getResult,
};
