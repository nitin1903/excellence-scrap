const scrap = require("../util/scrap");
const flipkartSchema = require("../scrap-schema/flipkart");
const Mobile = require("../models/mobiles");

async function flipkart(req, res) {
  try {
    const mobiles = await scrap(
      "https://flipkart.com/search?q=mobiles",
      flipkartSchema
    );
    await Mobile.addManyMobiles(mobiles);
    res.status(200).json({ message: "mobiles have been added to database" });
  } catch (err) {
    res.sendStatus(500);
  }
}

module.exports = flipkart;
