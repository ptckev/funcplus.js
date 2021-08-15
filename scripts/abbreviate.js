const isInteger = require("funcplus.js/scripts/isInteger");
const decimalCount = require("funcplus.js/scripts/decimalCount")
function abbreviate (value, { precision, fixed }) {
    if (!value) return console.error(Error("The input value is not defined."));

    if (!precision && typeof precision != "boolean") precision = 3 
    if (!fixed && typeof fixed != "boolean") fixed = 2;


    if (isInteger(precision) != true) return console.error(Error(`\"precision\" must be an integer.`));
    if (isNaN(precision) || typeof precision != "number") return console.error(Error(`\"precision\" must be an integer.`));
    if (!isInteger(fixed)) return console.error(Error("\"fixed\" must be an integer."));
    if (isNaN(fixed) || typeof fixed != "number") return console.error(Error("\"fixed\" must be an integer."));
    if (isNaN(value)) return console.error(Error("The input value must be a number."));
    if (fixed > 100 || fixed < 1) return console.error(Error("\"fixed\" must be between 1 and 100."));
    if (precision > 100 || precision < 1) return console.error(Error("\"precision\" must be between 1 and 100."));
    
    var suffixes = ["", "K", "M", "B","t", "q", "Q", "s", "S", "o", "n", "d", "U", "D", "T", "Qt", "Qd", "Sd", "St", "O", "N", "v", "c"];
    const value1 = Array.from(value.toString())
    const nc = (value1.length) - decimalCount(value)
    
   // if (value < 10) var suffixNum = Math.floor(nc/3)
    if (value < 10000) var suffixNum = Math.floor(nc/3)
    else if (value < 100000) var suffixNum = Math.floor(nc/3) -1
    else if (value < 10000000) var suffixNum = Math.floor(nc/3) 
    else var suffixNum = Math.floor(nc/3) - 1;
    
    
    if (suffixNum > 22) return console.error(Error("Input value value is too large."))
    
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(precision));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(fixed);
    }

    const finalNum = shortValue+suffixes[suffixNum];
    const finalArr = Array.from(finalNum.toString())
    
    if (finalArr[0] === "N" && finalArr[1] === "a") return console.error(Error("Input value must be less than 22 didgits before the decimal point."))

    return finalNum
}

module.exports = abbreviate