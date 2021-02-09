const Model = require('../../model/schema');
const { ClassModel } = Model;

classCreate = (req, res) => {
  res.render('admin/create-class');
};

doClassCreate = (req, res, next) => {
  console.log(req.body);
  ClassModel.create(req.body)
    .then(resp => {
      res.json({
        type: 'sucess',
        message: `${resp.cname} class added sucessfully`,
      });
    })
    .catch(err => {
      res.json({ type: 'danger', message: err.message });
    });
};

manageClasses = (req, res, next) => {
  ClassModel.find({})
    .then(docs => {
      res.render('admin/manage-class', {
        docs,
        url: req.url,
      });
    })
    .catch(err => {
      next(err);
    });
};

deleteClass = (req, res) => {
  console.log(req.params.id);
  ClassModel.findByIdAndDelete(req.params.id)
    .then(resp => {
      res.json(resp);
    })
    .catch(err => res.json(err));
};

getClass = (req, res) => {
  ClassModel.find({}).then(docs => {
    res.json(docs);
  });
};

module.exports = {
  classCreate,
  manageClasses,
  doClassCreate,
  deleteClass,
  getClass,
};
