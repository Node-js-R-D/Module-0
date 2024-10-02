
const double = (value) => new Promise((resolve) => resolve(value * 2));

double(5)
    .then(value => {
        return value + 10;
    })
    .then((result) => {
        console.log(result); // 20
    });