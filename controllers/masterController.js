const Master = require("../models/master");

// Insertion Master
const insertMaster = function (req, res, next) {
  const master = new Master({
    masterName: req.body.masterName,
    coordinateur: req.body.coordinateur,
    departement: req.body.departement,
    chefDept: req.body.chefDept,
    nbrProfesseurs: req.body.nbrProfesseurs,
    nbrEtudiants: req.body.nbrEtudiants,
    nbrModules: req.body.nbrModules,
  });
  master.save((err, result) => {
    if (err) {
      console.log(err);
      res.redirect("/");
      return;
    }
    console.log(result);
    res.redirect("/");
  });
};

// Affichage Master
const getMaster = function (req, res, next) {
  Master.find({}, (error, result) => {
    if (error) {
      console.log("error");
      res.redirect("masterList");
      return;
    }
    res.render("masterList", { items: result });
  });
};

// Update Master
const updateMaster = function (req, res, next) {
  const MID = req.body.id;
  console.log(MID);
  const masterUpdate = {
    masterName: req.body.masterName,
    coordinateur: req.body.coordinateur,
    departement: req.body.departement,
    chefDept: req.body.chefDept,
    nbrProfesseurs: req.body.nbrProfesseurs,
    nbrEtudiants: req.body.nbrEtudiants,
    nbrModules: req.body.nbrModules,
  };
  Master.updateOne({ _id: MID }, { $set: masterUpdate }, (error, result) => {
    if (error) {
      console.log("error");
      res.redirect("/masterUpdate");
      return;
    }
    console.log(result);
    res.redirect("/masterList");
  });
};

// Supprimer Un Utilisateur
const deleteMaster = function (req, res, next) {
  const MID = req.body.id;
  Master.deleteOne({ _id: MID }, (error, result) => {
    if (error) {
      console.log("error");
      res.redirect("/masterUpdate");
      return;
    }
    res.redirect("/masterList");
  });
};


module.exports = {
  insertMaster: insertMaster,
  getMaster: getMaster,
  updateMaster: updateMaster,
  deleteMaster: deleteMaster,
};
