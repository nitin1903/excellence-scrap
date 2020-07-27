const express = require("express");
const router = express.Router();

const flipkartController = require("../controllers/flipkart");
const snapdealController = require("../controllers/snapdeal");
const getFromDbCntroller = require("../controllers/from-db");

router.get("/flipkart/mobiles", flipkartController);

router.get("/snapdeal/mobiles", snapdealController);

router.get("/mobiles", getFromDbCntroller);

module.exports = router;
