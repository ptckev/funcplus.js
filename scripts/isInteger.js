const decimalCount = require("funcplus.js/scripts/decimalCount")
function isInteger(n) {

   if (isNaN(n) || !typeof n === "number" && !typeof n === "string") return console.error(Error("The input value must be a number."));


   if (decimalCount(n) > 0) return false
   else return true    

   



}

module.exports = isInteger