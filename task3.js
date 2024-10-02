
function delay(ms) {
    return new Promise((resolve) => {
        // Ваш код
        setTimeout(() => {
            resolve(`Пройшло ${ ms/1000 } секунди`);
        }, ms);
    });
}

// Виклик функції
delay(2000).then((resolve) => console.log(resolve));
