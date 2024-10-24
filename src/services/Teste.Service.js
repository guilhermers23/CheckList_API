import TesteRepository from "../repositories/Teste.Repository.js";
import GrupoDeTesteRepository from "../repositories/GrupoDeTeste.Repository.js";
import SubGrupoDeTesteRepository from "../repositories/SubGrupoDeTeste.Repository.js";

class TesteService {
  async criarTeste(data) {
    // Buscar ou criar o grupo de teste
    let grupo = await GrupoDeTesteRepository.buscarPorNome(data.grupoNome);
    if (!grupo) {
      grupo = await GrupoDeTesteRepository.criarGrupo({ nome: data.grupoNome });
    };

    // Buscar ou criar o subgrupo de teste, referenciando o grupo
    let subGrupo = await SubGrupoDeTesteRepository.buscarPorNome(data.subGrupoNome);
    if (!subGrupo) {
      subGrupo = await SubGrupoDeTesteRepository.criarSubGrupo({
        nome: data.subGrupoNome,
        grupo: grupo._id
      });
    };

    // Criar o teste, referenciando o grupo e subgrupo
    const novoTeste = await TesteRepository.criarTeste({
      tecnico: data.tecnico,
      grupo: grupo._id,
      subGrupo: subGrupo._id,
      description: data.description,
      resultado: data.resultado,
      completed: data.completed,
      observacao: data.observacao
    });

    return novoTeste;
  }

  async buscarPorId(id) {
    const teste = await TesteRepository.buscarPorId(id);
    if (!teste) {
      throw new Error("Teste não encontrado");
    }
    return teste;
  };

  async buscarTestesPorFiltro(grupoId, subGrupoId) {
    const filtro = {};
    if (grupoId) filtro.grupo = grupoId;
    if (subGrupoId) filtro.subGrupo = subGrupoId;

    return await TesteRepository.buscarPorFiltro(filtro);
  };

  async atualizarTeste(id, data) {
    const teste = await this.buscarPorId(id);
    if (!teste) {
      throw new Error("Teste não encontrado");
    }
    return await TesteRepository.atualizarTeste(id, data);
  };


  async excluirTeste(id) {
    const teste = await this.buscarPorId(id);
    if (!teste) {
      throw new Error("Teste não encontrado");
    }
    return await TesteRepository.excluirTeste(id);
  }
};

export default new TesteService();
