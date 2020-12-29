const Model = require("../../model/schema");
const { Subjects } = Model;

const mongoose = require("mongoose");

subject = (req, res) => {
  res.render("admin/subject");
};

createSubject = (req, res, next) => {
  Subjects.create(req.body)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      next(err);
    });
};

manageSubjects = (req, res) => {
  Subjects.find({}).then((docs) => {
    res.render("admin/manage-subject", {
      docs: docs,
    });
  });
};

module.exports = {
  subject: subject,
  createSubject: createSubject,
  manageSubjects: manageSubjects,
};
