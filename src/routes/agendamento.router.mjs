import { Router } from "express";
import AgendamentoController from "../controllers/agendamento.controller.mjs";

const routes = Router();

const agendamentoController = new AgendamentoController();

//pega todos agendamentos
//pega todos agendamentos
routes.get("/api/agendamentos", (request, response) =>
  agendamentoController.index(request, response)
);

//cria um agendamento
routes.post("/api/agendamentos", (request, response) =>
  agendamentoController.createAgendamento(request, response)
);

routes.post("/api/agendamentostatus", (request, response) =>
  agendamentoController.setAgendamentoStatus(request, response)
);

export default routes;