
function spesialNumbersOfRange(upRange) {
    const answerMas = [];
    for (let index = 1; index <= upRange; index++) {
        if (index % 3 === 0 || index % 5 === 0 || index % 7 === 0) {
            answerMas.push(index);
        }
    }
    return answerMas;
}

console.log(spesialNumbersOfRange(20));