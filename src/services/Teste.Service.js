import TesteRepository from "../repositories/teste.repository.js";
import GrupoDeTesteRepository from "../repositories/grupoDeTeste.repository.js";
import SubGrupoDeTesteRepository from "../repositories/subGrupoDeTeste.repository.js";

class TesteService {
  criarTeste = async (data, tecnico) => {
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
      tecnico: tecnico,
      grupo: grupo._id,
      subGrupo: subGrupo._id,
      description: data.description,
      resultado: data.resultado,
      completed: data.completed,
      observacao: data.observacao
    });

    return novoTeste;
  };

  findTestesByUserIdService = async (id) => {
    const testes = await TesteRepository.findTestesByUserIdRepository(id);

    return {
      testesByUser: testes.map((teste) => ({
        id: teste._id,
        tecnico: teste.tecnico.name,
        grupo: teste.grupo._id,
        subGrupo: teste.subGrupo._id,
        description: teste.description,
        resultado: teste.resultado,
        completed: teste.completed,
        observacao: teste.observacao
      })),
    };
  };

  buscarPorId = async (id) => {
    const teste = await TesteRepository.buscarPorId(id);
    if (!teste) {
      throw new Error("Teste não encontrado");
    }
    return teste;
  };

  buscarTestesPorFiltro = async (grupoId, subGrupoId) => {
    const filtro = {};
    if (grupoId) filtro.grupo = grupoId;
    if (subGrupoId) filtro.subGrupo = subGrupoId;

    return await TesteRepository.buscarPorFiltro(filtro);
  };

  atualizarTeste = async (id, data) => {
    const teste = await this.buscarPorId(id);
    if (!teste) {
      throw new Error("Teste não encontrado");
    }
    return await TesteRepository.atualizarTeste(id, data);
  };


  excluirTeste = async (id) => {
    const teste = await this.buscarPorId(id);
    if (!teste) {
      throw new Error("Teste não encontrado");
    }
    return await TesteRepository.excluirTeste(id);
  }
};

export default new TesteService();
