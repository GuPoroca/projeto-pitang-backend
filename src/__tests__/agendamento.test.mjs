import request from "supertest";
import express from "express";
import agendamentoRoutes from "../routes/agendamento.router.mjs";

const server = express();

server.use(express.json());
server.use(agendamentoRoutes);

const agendamentoTeste = {
  //mudar a cada 2 mesmos horários salvos
  name: "Testes",
  dataNascimento: "2001-03-22T03:00:00.000Z",
  dataAgendamento: "2026-07-13T15:00:00.000Z",
};

describe("GET /api/agendamentos", () => {
  it("should return all agendamentos", async () => {
    return request(server)
      .get("/api/agendamentos")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("POST /api/agendamentos", () => {
  it("should post a new agendamento", async () => {
    return request(server)
      .post("/api/agendamentos")
      .send(agendamentoTeste)
      .then((response) => {
        expect(response.statusCode).toBe(201);
      });
  });
});
