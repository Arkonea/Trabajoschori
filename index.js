const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Bienvenido a Calculadora. Usa /sumar, /restar, /multiplicar o /dividir con parámetros a y b.");
});


app.get("/sumar", (req, res) => {
    const a = 6
    const b = 8
    res.send({ operacion: "suma", resultado: a + b });
});


app.get("/restar", (req, res) => {
    const a = 5
    const b = 3
    res.send({ operacion: "resta", resultado: a - b });
});


app.get("/multiplicar", (req, res) => {
    const a = 4
    const b = 4
    res.send({ operacion: "multiplicación", resultado: a * b });
});


app.get("/dividir", (req, res) => {
    const a = 8
    const b = 2
    if (b === 0) {
        return res.send({ error: "No se puede dividir entre 0" });
    }
    res.send({ operacion: "división", resultado: a / b });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
