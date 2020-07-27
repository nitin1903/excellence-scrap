const scrap = require("../util/scrap");
const snapdealSchema = require("../scrap-schema/snapdeal");

async function snapdeal(req, res) {
  try {
    const mobiles = await scrap(
      "https://www.snapdeal.com/products/mobiles-mobile-phones/",
      snapdealSchema
    );
    res.status(200).json(mobiles);
  } catch (err) {
    res.sendStatus(500);
  }
}

module.exports = snapdeal;
