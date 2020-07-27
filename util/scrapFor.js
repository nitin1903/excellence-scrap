const cheerio = require("cheerio");

let $, Schema;

function scrapFor(htmlBody, schema) {
  $ = cheerio.load(htmlBody);
  Schema = schema;
  const rootElem = schema.root;
  const source = schema.source;
  const objKeys = Object.keys(schema).slice(2);
  const mobiles = [];
  const mobileDivs = $(rootElem);

  for (let i = 0; i < mobileDivs.length; i++) {
    let mobile = { source };
    objKeys.forEach((key) => {
      let elem = $(mobileDivs[i]).find(schema[key].selector);
      if (schema[key].type == "list") {
        mobile[key] = [];
        for (let j = 0; j < elem.length; j++) {
          mobile[key].push(schemaKeyValue(elem[j], key));
        }
      } else {
        mobile[key] = schemaKeyValue(elem[0], key);
      }
    });
    mobiles.push(mobile);
  }
  return mobiles;
}

function schemaKeyValue(elem, key) {
  if (Schema[key].text) {
    return $(elem).text();
  }
  return elem.attribs[Schema[key].attr];
}

module.exports = scrapFor;
