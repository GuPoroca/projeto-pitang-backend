import agendamentoRoutes from "./routes/agendamento.router.mjs";
import express from "express";

const server = express();

const PORT = process.env.PORT || 3000;

server.use(agendamentoRoutes);

server.use("*", (request, response) => {
    response.status(404).send({ message: "Route not found" });
});

server.listen(PORT, () => {
    console.log(`Estou rodando na porta ${PORT}`);
});