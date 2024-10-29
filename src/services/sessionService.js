import sessionRepository from "../repositories/sessionRepository.js";

class SessionService {
    async startSession(tecnicoId, grupo, subgrupo) {
        const newSession = await sessionRepository.createSession({ tecnicoId, grupo, subgrupo, tests: [] });
        return newSession;
    };

    async addTestToSession(sessionId, testName, status, resultado) {
        const test = { testName, status, resultado };
        return await sessionRepository.addTestResult(sessionId, test);
    };

    async generateReport(sessionId) {
        const session = await sessionRepository.findSessionById(sessionId);
        if (!session) throw new Error("Sessão não encontrada");

        // Exemplo de relatório básico, personalizável conforme necessidade
        const report = {
            tecnico: session.tecnicoId.nome,
            grupo: session.grupo,
            subgrupo: session.subgrupo,
            tests: session.tests,
            criadoEm: session.criadoEm,
        };
        return report;
    };
};

export default new SessionService();

