import Sessao from "../models/Session.js";

class SessaoRepository {
  createSession = async (sessionData) => {
    const newSession = new Sessao(sessionData);
    return await newSession.save();
  };

  getSessionById = async (sessionId) => {
    return await Sessao.findById(sessionId).populate('testes');
  };

  updateSessionStatus = async (sessionId, status, dataFim = null) => {
    return await Sessao.findByIdAndUpdate(sessionId, { status, dataFim }, { new: true });
  };
};

export default new SessaoRepository();
