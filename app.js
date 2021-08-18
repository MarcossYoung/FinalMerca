const express = require('express');
const app = express();

const path = require('path');

app.listen(3000, () => {
    console.log('esta prendido')
});
app.use(express.static(path.join(__dirname, "public/")));


app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
});

app.get('/Registro', (req , res) => {
    res.sendFile(path.join(__dirname, 'views/registro.html'))
});