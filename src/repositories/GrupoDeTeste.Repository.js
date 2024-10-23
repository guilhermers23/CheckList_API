import GrupoDeTeste from "../models/GrupoDeTeste.js";

class GrupoDeTesteRepository {
  async criarGrupo(data) {
    const novoGrupo = new GrupoDeTeste(data);
    return await novoGrupo.save();
  }

  async buscarPorNome(nome) {
    return await GrupoDeTeste.findOne({ nome });
  }
}

export default new GrupoDeTesteRepository();
