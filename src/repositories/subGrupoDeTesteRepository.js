import SubGrupoDeTeste from "../models/SubGrupoDeTeste.js";

class SubGrupoDeTesteRepository {
  criarSubGrupo = async (data) => {
    const novoSubGrupo = new SubGrupoDeTeste(data);
    return await novoSubGrupo.save();
  };

  buscarPorNome = async (nome) => {
    return await SubGrupoDeTeste.findOne({ nome });
  };

  buscarPorID = async (_id) => {
    return await SubGrupoDeTeste.findOne({ _id });
  };

  buscarTodosSubGrupos = async () => {
    return await SubGrupoDeTeste.find().populate('grupo');
  };

  buscarPorGrupo = async (grupoId) => {
    return await SubGrupoDeTeste.find({ grupo: grupoId });
  };
}

export default new SubGrupoDeTesteRepository();
