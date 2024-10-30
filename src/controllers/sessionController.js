import SessaoService from "../services/sessionService.js";

class SessaoController {
    startSession = async (req, res) => {
        try {
            // Extraia e valide os campos esperados
            const { tecnico, grupoId, subGrupoId, testes } = req.body;

            if (!tecnico || !grupoId || !subGrupoId || !testes || !Array.isArray(testes)) {
                return res.status(400).json({ message: "Dados inválidos para iniciar a sessão" });
            }

            // Continue com a criação da sessão
            const sessionData = { tecnico, grupo: grupoId, subGrupo: subGrupoId, testes };
            const session = await SessaoService.startSession(sessionData);
            res.status(201).json(session);
        } catch (error) {
            console.error("Erro ao iniciar sessão:", error);
            res.status(500).json({ message: 'Erro ao iniciar a sessão.', error });
        }
    };

    finalizeSession = async (req, res) => {
        const { sessionId } = req.params;
        const { testesAtualizados } = req.body;

        try {
            const session = await SessaoService.finalizeSession(sessionId, testesAtualizados);
            res.status(200).json(session);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    getAllSessions = async (req, res) => {
        try {
            const session = await SessaoService.getAllSessions();
            res.status(200).json(session);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao obter o relatório da sessão.', error });
        }
    };
};

export default new SessaoController();
