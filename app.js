const express = require('express');
const app = express();
const featureToggles = require('./config/featureToggles');

// Função antiga
app.get('/old-feature', (req, res) => {
    res.send("Esta é a funcionalidade antiga.");
});

// Função nova controlada pelo Feature Toggle
app.get('/new-feature', (req, res) => {
    if (featureToggles.newFeature) {
        res.send("Nova funcionalidade está habilitada!");
    } else {
        res.send("Nova funcionalidade está desabilitada.");
    }
});

// Função experimental controlada pelo Feature Toggle
app.get('/experimental-feature', (req, res) => {
    if (featureToggles.experimentalFeature) {
        res.send("Funcionalidade experimental habilitada.");
    } else {
        res.send("Funcionalidade experimental está desabilitada.");
    }
});

// Iniciar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
