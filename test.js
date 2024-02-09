// Importar la función sum del archivo app.js
const { fromEuroToDollar } = require('./app.js');

// Comienza tu primera prueba
test(' an euro is 1.07$ so 3.5 euros are 3.745$ ', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromEuroToDollar(3.5);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(3.745);
});