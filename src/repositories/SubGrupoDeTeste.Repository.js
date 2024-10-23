import SubGrupoDeTeste from "../models/SubGrupoDeTeste.js";

class SubGrupoDeTesteRepository {
  async criarSubGrupo(data) {
    const novoSubGrupo = new SubGrupoDeTeste(data);
    return await novoSubGrupo.save();
  };

  async buscarPorNome(nome) {
    return await SubGrupoDeTeste.findOne({ nome });
  };

  async buscarTodosSubGrupos() {
    return await SubGrupoDeTeste.find().populate('grupo');
  };

  async buscarPorGrupo(grupoId) {
    return await SubGrupoDeTeste.find({ grupo: grupoId });
  };
}

export default new SubGrupoDeTesteRepository();
