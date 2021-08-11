 function isInteger(n) {

    if (isNaN(n)) {
        return console.error(Error("Input must be a number."))
    }

    var result = (n - Math.floor(n)) !== 0; 
    

    if (result) {
        return false
    } else {
        return true
    }

}

module.exports = isInteger