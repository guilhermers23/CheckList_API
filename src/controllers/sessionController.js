import sessionService from "../services/sessionService.js";

class SessionController {
    async startSession(req, res) {
        const { tecnicoId, grupo, subgrupo } = req.body;
        try {
            const session = await sessionService.startSession(tecnicoId, grupo, subgrupo);
            res.status(201).json(session);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    async addTestToSession(req, res) {
        const { sessionId } = req.params;
        const { testName, status, resultado } = req.body;
        try {
            const updatedSession = await sessionService.addTestToSession(sessionId, testName, status, resultado);
            res.status(200).json(updatedSession);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    async generateReport(req, res) {
        const { sessionId } = req.params;
        try {
            const report = await sessionService.generateReport(sessionId);
            res.status(200).json(report);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };
};

export default new SessionController();
