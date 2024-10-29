import SessaoRepository from "../repositories/sessionRepository.js";

class SessaoService {
    startSession = async (sessionData) => {
        return await SessaoRepository.createSession(sessionData);
    };

    completeSession = async (sessionId) => {
        return await SessaoRepository.updateSessionStatus(sessionId, 'Finalizado', new Date());
    };

    getSessionReport = async (sessionId) => {
        return await SessaoRepository.getSessionById(sessionId);
    };
};

export default new SessaoService();
