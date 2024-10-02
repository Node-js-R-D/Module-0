
function isPolyndrom(number) {
    return number.toString() === number.toString().split("").reverse().join("")
}

console.log(isPolyndrom(1221));