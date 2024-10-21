import listTestesService from "../services/ListTestes.service.js";

const createTesteController = async (req, res) => {
    const { tecnico, grupo, subGrupo, description } = req.body;
    //const userId = req.userId;

    try {
        const test = await listTestesService.createTesteService(
            { tecnico, grupo, subGrupo, description }
        );

        return res.status(201).send(test);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const findAllTestesController = async (req, res) => {
    try {
        const test = await listTestesService.findAllListTestService();
        return res.send(test);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

export default {
    createTesteController,
    findAllTestesController
}
