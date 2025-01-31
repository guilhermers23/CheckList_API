import Sessao from "../models/Session.js";

class SessaoRepository {
  createSession = async (sessionData) => {
    const newSession = new Sessao(sessionData);
    return await newSession.save();
  };

  // Função para encontrar uma sessão pelo ID
  findSessionById = async (sessionId) => {
    return await Sessao.findById(sessionId);
  };

  // Função para salvar as alterações na sessão
  finalizeSession = async (sessionId, testesAtualizados) => {
    return await Sessao.findByIdAndUpdate(
      sessionId,
      {
        status: 'Finalizado',
        testes: testesAtualizados,
        dataFim: new Date(),
      },
      { new: true }
    );
  }

  findAllSessions = async () => {
    return await Sessao.find()
      .populate("testes")
      .populate("tecnico")
  }
};

export default new SessaoRepository();
