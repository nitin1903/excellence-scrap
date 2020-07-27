const axios = require("axios");

async function getHtmlBody(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
}

module.exports = getHtmlBody;
