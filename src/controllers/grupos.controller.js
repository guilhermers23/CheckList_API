import gruposService from "../services/grupos.service.js";

const createGrupoController = async (req, res) => {
    const { grupo } = req.body;
    //const userId = req.userId;

    try {
        const response = await gruposService.createGrupoService(
            { grupo }
        );

        return res.status(201).send(response);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const createSubGrupoController = async (req, res) => {
    const { subGrupo } = req.body;
    //const userId = req.userId;

    try {
        const response = await gruposService.createSubGrupoService(
            { subGrupo }
        );

        return res.status(201).send(response);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const findAllGrupoController = async (req, res) => {
    try {
        const grupo = await gruposService.findAllGrupoService();
        return res.send(grupo);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const findAllSubGrupoController = async (req, res) => {
    try {
        const subGrupo = await gruposService.findAllSubGrupoService();
        return res.send(subGrupo);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

export default {
    createGrupoController,
    createSubGrupoController,
    findAllGrupoController,
    findAllSubGrupoController
}
