const Mobile = require("../models/mobiles");
const Sources = require("../sources");

const getFromDb = async function (req, res) {
  const source = req.query.source;
  if (!source || !Sources.includes(source.toLowerCase())) {
    return res.sendStatus(400);
  }
  try {
    const mobiles = await Mobile.getAll(source);
    return res.status(200).json(mobiles);
  } catch (err) {
    return res.sendStatus(500);
  }
};

module.exports = getFromDb;
