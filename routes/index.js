var express = require("express");
var router = express.Router();
const controller = require("../controllers/masterController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Master Administration" });
});

router.post("/insert", controller.insertMaster);

router.get("/masterList", controller.getMaster);

router.get("/update", (req, res, next) => {
  res.render("update");
});

router.post("/masterUpdate", controller.updateMaster);

router.post("/masterDelete", controller.deleteMaster);

module.exports = router;
