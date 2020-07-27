const express = require("express");
const router = express.Router();

const flipkartController = require("../controllers/flipkart");
const snapdealController = require("../controllers/snapdeal");

router.get("/flipkart/mobiles", flipkartController);

router.get("/snapdeal/mobiles", snapdealController);

module.exports = router;
