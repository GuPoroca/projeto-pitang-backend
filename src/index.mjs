import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import agendamentoRoutes from "./routes/agendamento.router.mjs";


const server = express();

const PORT = process.env.PORT || 3000;

server.use(cors());
server.use(helmet());
server.use(morgan("combined")); 
server.use(agendamentoRoutes);

server.use("*", (request, response) => {
    response.status(404).send({ message: "Route not found" });
});

server.listen(PORT, () => {
    console.log(`Estou rodando na porta ${PORT}`);
});