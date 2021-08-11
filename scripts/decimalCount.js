function decimalCount(value) {
    if (isNaN(value) || typeof value != "number" && typeof value != "string") return console.error(Error("The input value must be a number."));

   const input = value.toString()
    const value1 = Array.from(input)
    
    const index = value1.indexOf(".")
    if (index === -1) return 0
   
    value1.splice(0, index+1)
    
    return value1.length
}//"203946.02389465"

module.exports = decimalCount