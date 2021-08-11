function reverse(string) {
    if (!typeof string === "string") return console.error(Error("Input value must be a string."))
    const start = Array.from(string)
  //  const arr = start.split('')
        const reversed = start.reverse()
        const joinArray = reversed.join('')
        const final = joinArray.toString()
    
        return joinArray
}
module.exports = reverse