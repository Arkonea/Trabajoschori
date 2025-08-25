const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.send(`
        <h1>Calculadora con Parametros /URL/1/a/b</h1>
        <p><a href="/1">1. Suma</a></p>
        <p><a href="/2">2. Resta</a></p>
        <p><a href="/3">3. Multiplicación</a></p>
        <p><a href="/4">4. División</a></p>
    `);
});


app.get('/1', (req, res) => {
    const a = 3;
    const b = 2;
    const resultado = a + b;
    console.log(`Suma => ${a} + ${b} = ${resultado}`);
    res.send(`La suma de ${a} + ${b} es ${resultado}`);
});

app.get('/2', (req, res) => {
    const a = 3;
    const b = 2;
    const resultado = a - b;
    console.log(`Resta => ${a} - ${b} = ${resultado}`);
    res.send(`La resta de ${a} - ${b} es ${resultado}`);
});

app.get('/3', (req, res) => {
    const a = 3;
    const b = 2;
    const resultado = a * b;
    console.log(`Multiplicación => ${a} * ${b} = ${resultado}`);
    res.send(`La multiplicación de ${a} * ${b} es ${resultado}`);
});

app.get('/4', (req, res) => {
    const a = 3;
    const b = 2;
    const resultado = a / b;
    console.log(`División => ${a} / ${b} = ${resultado}`);
    res.send(`La división de ${a} / ${b} es ${resultado}`);
});

app.get('/1/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultado = num1 + num2;
    console.log(`1 => ${num1} + ${num2} = ${resultado}`);
    res.send(`La suma de ${num1} y ${num2} es ${resultado}`);
});

app.get('/2/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultado = num1 - num2;
    console.log(`2 => ${num1} - ${num2} = ${resultado}`);
    res.send(`La resta de ${num1} y ${num2} es ${resultado}`);
});

app.get('/3/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultado = num1 * num2;
    console.log(`3 => ${num1} * ${num2} = ${resultado}`);
    res.send(`La multiplicación de ${num1} y ${num2} es ${resultado}`);
});

app.get('/4/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    if (num2 === 0) {
        return res.send("Error: no se puede dividir entre 0");
    }

    const resultado = num1 / num2;
    console.log(`4 => ${num1} / ${num2} = ${resultado}`);
    res.send(`La división de ${num1} y ${num2} es ${resultado}`);
});


app.listen(PORT, () => { 
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
