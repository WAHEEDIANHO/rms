const Model = require('../../model/schema');
const { Subjects } = Model;

subject = (req, res) => {
  res.render('admin/subject');
};

createSubject = (req, res, next) => {
  console.log(req.body);
  Subjects.create(req.body)
    .then(resp => {
      res.json({
        type: 'sucess',
        message: `${resp.sname}  added sucessfully`,
      });
    })
    .catch(err => {
      res.json({ type: 'danger', message: err.message });
    });
};

manageSubjects = (req, res) => {
  Subjects.find({}).then(docs => {
    res.render('admin/manage-subject', {
      docs,
      url: req.url,
    });
  });
};

updateSubject = (req, res) => {
  Subjects.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(subject => res.json('success'))
    .catch(err => res.json(err));
};

deleteSubject = (req, res) => {
  console.log(req.params.id);
  Subjects.findByIdAndDelete(req.params.id)
    .then(resp => res.json(resp))
    .catch(err => res.json(err));
};

module.exports = {
  subject,
  createSubject,
  manageSubjects,
  deleteSubject,
  updateSubject,
};
