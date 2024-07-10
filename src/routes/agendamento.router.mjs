import { Router } from "express";
import AgendamentoController from "../controllers/agendamento.controller.mjs"

const routes = Router();

const agendamentoController = new AgendamentoController();

  //pega todos agendamentos
routes.get("/api/agendamentos", (request, response) =>
    agendamentoController.index(request, response)
  );
  
  //cria um agendamento
routes.post("/api/agendamentos", (request, response) =>
    agendamentoController.createAgendamento(request, response)
  );

export default routes;