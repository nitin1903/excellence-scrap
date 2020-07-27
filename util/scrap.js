const getHtmlBody = require("./html-body");
const scrapFor = require("./scrapFor");

async function scrap(url, schema) {
  try {
    const response = await getHtmlBody(url);
    const scrapResult = scrapFor(response, schema);
    return scrapResult;
  } catch (err) {
    throw err;
  }
}

module.exports = scrap;
