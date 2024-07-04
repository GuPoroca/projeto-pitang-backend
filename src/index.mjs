const express = require('express');
const server = express();

const PORT = process.env.PORT || 3000;

server.use("*", (request, response) => {
    response.status(404).send({ message: "Route not found" });
});

server.listen(PORT, () => {
    console.log(`Estou rodando na porta ${PORT}`);
});