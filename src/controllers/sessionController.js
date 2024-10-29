import SessaoService from "../services/sessionService.js";

class SessaoController {
    startSession = async (req, res) => {
        try {
            const sessionData = {
                tecnico: req.user.id, // Pega o ID do técnico logado 
                grupo: req.body.grupoId,
                subGrupo: req.body.subGrupoId
            };
            const session = await SessaoService.startSession(sessionData);
            res.status(201).json(session);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao iniciar a sessão.', error });
        }
    };

    completeSession = async (req, res) => {
        try {
            const session = await SessaoService.completeSession(req.params.id);
            res.status(200).json(session);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao finalizar a sessão.', error });
        }
    };

    getSessionReport = async (req, res) => {
        try {
            const session = await SessaoService.getSessionReport(req.params.id);
            res.status(200).json(session);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao obter o relatório da sessão.', error });
        }
    };
};

export default new SessaoController();
