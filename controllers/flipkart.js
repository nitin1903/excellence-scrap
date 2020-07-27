const scrap = require("../util/scrap");
const flipkartSchema = require("../scrap-schema/flipkart");

async function flipkart(req, res) {
  try {
    const mobiles = await scrap(
      "https://flipkart.com/search?q=mobiles",
      flipkartSchema
    );
    res.status(200).json(mobiles);
  } catch (err) {
    res.sendStatus(500);
  }
}

module.exports = flipkart;
