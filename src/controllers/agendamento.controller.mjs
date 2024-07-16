import z from "zod";
import { subDays } from "date-fns";
import prismaClient from "../utils/prismaClient.mjs";

const now = new Date();

const agendamentoSchema = z.object({
  name: z.string().min(4),
  dataNascimento: z.date().max(subDays(now, 0)),
  dataAgendamento: z.date().min(now),
});

export default class AgendamentoController {
  async index(request, response) {
    const agendamentos = await prismaClient.agendamento.findMany();
    response.send({
      page: 1,
      pageSize: 20,
      totalCount: agendamentos.length,
      items: agendamentos,
    });
  }

  async createAgendamento(request, response) {
    const agendamento = request.body;
    agendamento.dataNascimento = new Date(agendamento.dataNascimento);
    agendamento.dataAgendamento = new Date(agendamento.dataAgendamento);
    console.log(agendamento);
    const { success, data, error } = agendamentoSchema.safeParse(agendamento);
    //checar se tem 2, se tiver 2, success = false.

    const count = await prismaClient.agendamento.count({
      where: {
        dataAgendamento: agendamento.dataAgendamento,
      },
    });

    if (count >= 2) {
      return response.status(400).send({ error: "Horário ocupado" });
    }

    if (!success) {
      return response.status(400).send(error);
    }

    await prismaClient.agendamento.create({ data: { ...data } });
    response.status(201).send({ message: "agendamento armazenado" });
  }
}
