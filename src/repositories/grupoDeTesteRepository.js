import GrupoDeTeste from "../models/GrupoDeTeste.js";

class GrupoDeTesteRepository {
  criarGrupo = async (data) => {
    const novoGrupo = new GrupoDeTeste(data);
    return await novoGrupo.save();
  };

  buscarPorNome = async (nome) => {
    return await GrupoDeTeste.findOne({ nome });
  };

  buscarPorID = async (_id) => {
    return await GrupoDeTeste.findOne({ _id });
  };

  buscarTodosGrupos = async () => {
    return await GrupoDeTeste.find();
  };
}

export default new GrupoDeTesteRepository();
