import z from "zod";
import { subDays } from "date-fns";

const now = new Date();

const agendamentoSchema = z.object({
  name: z.string().min(4),
  dataNascimento: z.date().max(subDays(now, 0)),
  dataAgendamento: z.date().min(now),
});

let agendamentos = [];

export default class AgendamentoController {
  async index(request, response) {
    console.log("opa");
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
    if (!success) {
      return response.status(400).send(error);
    }

    agendamentos.push(data);

    response.send({ message: "agendamento armazenado" });
  }
}
