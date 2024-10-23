import gruposService from "../services/grupos.service.js";

class GruposController {

    async criarGrupo(req, res) {
        try {
            const { nome } = req.body;

            // Criar novo grupo
            const grupo = await gruposService.criarGrupo({ nome });

            return res.status(201).json(grupo);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    async buscarTodosGrupos(req, res) {
        try {
            const grupos = await gruposService.buscarTodosGrupos();
            if (grupos.length === 0) {
                res.json({ message: "Nenhum grupo encontrado!" })
            }
            return res.status(200).json(grupos);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    async criarSubGrupo(req, res) {
        try {
            const { nome, grupoId } = req.body;

            // Criar novo subgrupo referenciando o grupo
            const subGrupo = await gruposService.criarSubGrupo({ nome, grupo: grupoId });

            return res.status(201).json(subGrupo);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    async buscarTodosSubGrupos(req, res) {
        try {
            const subGrupos = await gruposService.buscarTodosSubGrupos();
            if (subGrupos.length === 0) {
                res.json({ message: "Nenhum SubGrupo encontrado!" })
            }
            return res.status(200).json(subGrupos);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    async buscarSubGruposPorGrupo(req, res) {
        try {
            const { grupoId } = req.params;
            const subGrupos = await gruposService.buscarPorGrupo(grupoId);

            return res.status(200).json(subGrupos);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
};

export default new GruposController();
