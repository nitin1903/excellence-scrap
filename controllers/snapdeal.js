const scrap = require("../util/scrap");
const snapdealSchema = require("../scrap-schema/snapdeal");
const Mobile = require("../models/mobiles");

async function snapdeal(req, res) {
  try {
    const mobiles = await scrap(
      "https://www.snapdeal.com/products/mobiles-mobile-phones/",
      snapdealSchema
    );
    await Mobile.addManyMobiles(mobiles);
    res.status(200).json({ message: "mobiles added to database" });
  } catch (err) {
    res.sendStatus(500);
  }
}

module.exports = snapdeal;
