const getHtmlBody = require('../util/html-body')
const scrap = require('../util/scrap')
const flipkartSchema = require('../scrap-schema/flipkart')
async function flipkart(req, res){
    try{
        const response = await getHtmlBody('https://flipkart.com/search?q=mobiles')
        const mobiles = scrap(response, flipkartSchema)
        res.status(200).json(mobiles)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

 module.exports = flipkart

// async function flipkart(){
//     try{
//         const response = await getHtmlBody('https://flipkart.com/search?q=mobiles')
//         const mobiles = scrap(response, flipkartSchema)
//         console.log('in flipkart \n\n\n\n\n')
//         //console.log(mobiles)
//     } catch (err) {
//         console.error(err)
//     }
// }

// flipkart()