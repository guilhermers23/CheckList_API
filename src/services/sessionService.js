import SessaoRepository from "../repositories/sessionRepository.js";

class SessaoService {
    startSession = async (sessionData) => {
        return await SessaoRepository.createSession(sessionData);
    };

    finalizeSession = async (sessionId, testesAtualizados) => {
        const session = await SessaoRepository.finalizeSession(sessionId, testesAtualizados);
        if (!session) {
            throw new Error('Sessão não encontrada ou já finalizada');
        }
        return session;
    };

    getAllSessions = async () => {
        return await SessaoRepository.findAllSessions();
    };
};

export default new SessaoService();
