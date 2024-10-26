import GrupoDeTesteRepository from "../repositories/grupoDeTeste.repository.js";
import SubGrupoDeTesteRepository from "../repositories/subGrupoDeTeste.repository.js";

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
