function isEven(number) {

    if (isNaN(number)) return console.error(Error("Input must be a number."))
    return (number % 2 == 0)    
    

}

module.exports = isEven