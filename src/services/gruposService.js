import GrupoDeTesteRepository from "../repositories/grupoDeTesteRepository.js";
import SubGrupoDeTesteRepository from "../repositories/subGrupoDeTesteRepository.js";

class GruposService {

  criarGrupo = async (data) => {
    return await GrupoDeTesteRepository.criarGrupo(data);
  };

  buscarTodosGrupos = async () => {
    return await GrupoDeTesteRepository.buscarTodosGrupos();
  };

  criarSubGrupo = async (data) => {
    return await SubGrupoDeTesteRepository.criarSubGrupo(data);
  };

  buscarTodosSubGrupos = async () => {
    return await SubGrupoDeTesteRepository.buscarTodosSubGrupos();
  };

  buscarPorGrupo = async (grupoId) => {
    return await SubGrupoDeTesteRepository.buscarPorGrupo(grupoId);
  };
}

export default new GruposService();
