import GrupoDeTesteRepository from "../repositories/GrupoDeTeste.Repository.js";
import SubGrupoDeTesteRepository from "../repositories/SubGrupoDeTeste.Repository.js";

class GruposService {

  async criarGrupo(data) {
    return await GrupoDeTesteRepository.criarGrupo(data);
  };

  async buscarTodosGrupos() {
    return await GrupoDeTesteRepository.buscarTodosGrupos();
  };

  async criarSubGrupo(data) {
    return await SubGrupoDeTesteRepository.criarSubGrupo(data);
  };

  async buscarTodosSubGrupos() {
    return await SubGrupoDeTesteRepository.buscarTodosSubGrupos();
  };

  async buscarPorGrupo(grupoId) {
    return await SubGrupoDeTesteRepository.buscarPorGrupo(grupoId);
  };
}

export default new GruposService();
