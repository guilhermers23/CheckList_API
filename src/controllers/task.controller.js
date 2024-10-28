import TaskService from "../services/task.service.js"

class TaskController {
    async criarTeste(req, res) {
        try {
            const { grupoNome, subGrupoNome, description, resultado, completed, observacao } = req.body;
            const tecnico = req.userId;

            // Criar novo teste com grupo e subgrupo
            const teste = await TaskService.criarTeste({
                grupoNome,
                subGrupoNome,
                description,
                resultado,
                completed,
                observacao
            }, tecnico);

            return res.status(201).json(teste);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    async buscarPorId(req, res) {
        try {
            const teste = await TaskService.buscarPorId(req.params.id);
            return res.status(200).json(teste);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    };

    async atualizarTeste(req, res) {
        try {
            const teste = await TaskService.atualizarTeste(req.params.id, req.body);
            return res.status(200).json(teste);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    async excluirTeste(req, res) {
        try {
            const { id } = req.params;
            const tecnico = req.userId;

            await TaskService.excluirTeste(id, tecnico);
            return res.status(204).json({ message: "Teste Excluido com sucesso!" });
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    };

    async findTestesByUserIdController(req, res) {
        const id = req.userId;

        try {
            const testes = await TaskService.findTestesByUserIdService(id);
            return res.send(testes);
        } catch (e) {
            console.error("Error:", e)
            return res.status(500).send(e.message);
        }
    };

    async listarTestesPorFiltro(req, res) {
        try {
            const { grupoId, subGrupoId } = req.query;
            const testes = await TaskService.buscarTestesPorFiltro(grupoId, subGrupoId);
            if (testes.length === 0) {
                res.json({ message: "Nenhum teste encontrado!" })
            }
            return res.status(200).json(testes);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };
};

export default new TaskController();
