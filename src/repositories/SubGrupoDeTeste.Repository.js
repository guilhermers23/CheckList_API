import SubGrupoDeTeste from "../models/SubGrupoDeTeste.js";

class SubGrupoDeTesteRepository {
  async criarSubGrupo(data) {
    const novoSubGrupo = new SubGrupoDeTeste(data);
    return await novoSubGrupo.save();
  }

  async buscarPorNome(nome) {
    return await SubGrupoDeTeste.findOne({ nome });
  }
}

export default new SubGrupoDeTesteRepository();
