import { Router } from "express";

const routes = Router();

  //pega todos agendamentos
routes.get("/api/agendamentos", (request, response) =>
    response.send("Pegar agendamentos")
  );
  
  //cria um agendamento
routes.post("/api/agendamento", (request, response) =>
    response.send("Criar agendamento")
  );

export default routes;