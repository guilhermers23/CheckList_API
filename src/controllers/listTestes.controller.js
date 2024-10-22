import listTestesService from "../services/ListTestes.service.js";

const createTesteController = async (req, res) => {
    const { tecnico, grupo, subGrupo, description, resultado } = req.body;
    //const userId = req.userId;

    try {
        const test = await listTestesService.createTesteService(
            { tecnico, grupo, subGrupo, description, resultado }
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

const findTesteByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const teste = await listTestesService.findTesteByIdService(id);
        return res.send(teste);
    } catch (e) {
        res.status(404).send(e.message);
    }
};

const deleteTesteController = async (req, res) => {
    const { id } = req.params;

    try {
        await listTestesService.deleteTesteService(id);
        return res.send({ message: "Teste deleted successfully!" });
    } catch (err) {
        return res.status(500).send(err.message);
    }
};

const updateTesteController = async (req, res) => {
    const { tecnico, grupo, subGrupo, description, resultado, observacao } = req.body;
    const { id } = req.params;
  
    try {
      await listTestesService.updateTesteService(id, tecnico, grupo, subGrupo, description, resultado, observacao);
  
      return res.send({ message: "Teste updated successfully!" });
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

export default {
    createTesteController,
    findAllTestesController,
    findTesteByIdController,
    deleteTesteController,
    updateTesteController
}
