const axios = require("axios");

async function getHtmlBody(url) {
  try {
    console.log(`in scrap file`);
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
}

module.exports = getHtmlBody;
