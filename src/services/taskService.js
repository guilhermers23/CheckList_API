import taskRepository from "../repositories/taskRepository.js";
import GrupoDeTesteRepository from "../repositories/grupoDeTesteRepository.js";
import SubGrupoDeTesteRepository from "../repositories/subGrupoDeTesteRepository.js";

class TaskService {
    //BUSCA PELO NOME DO GRUPO
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
        const novoTeste = await taskRepository.criarTeste({
            tecnico: tecnico,
            grupo: grupo._id,
            subGrupo: subGrupo._id,
            description: data.description,
            resultado: data.resultado,
            completed: data.completed,
            observacao: data.observacao,
            files: data.files
        });

        return novoTeste;
    };

    criarTestePeloIDGrupo = async (data, tecnico) => {
        // Buscar o grupo de teste
        let grupoID = await GrupoDeTesteRepository.buscarPorID(data.grupoID);
        // Buscar o subgrupo de teste, referenciando o grupo
        let subGrupoID = await SubGrupoDeTesteRepository.buscarPorID(data.subGrupoID);
        // Criar o teste, referenciando o grupo e subgrupo
        const novoTeste = await taskRepository.criarTeste({
            tecnico: tecnico,
            grupo: grupoID,
            subGrupo: subGrupoID,
            description: data.description,
            resultado: data.resultado,
            completed: data.completed,
            observacao: data.observacao,
            files: data.files
        });

        return novoTeste;
    };

    findTestesByUserIdService = async (id) => {
        const testes = await taskRepository.findTestesByUserIdRepository(id);

        return {
            testesByUser: testes.map((teste) => ({
                id: teste._id,
                tecnico: teste.tecnico.name,
                grupo: teste.grupo._id,
                subGrupo: teste.subGrupo._id,
                description: teste.description,
                resultado: teste.resultado,
                completed: teste.completed,
                observacao: teste.observacao,
                files: teste.files
            })),
        };
    };

    buscarPorId = async (id) => {
        const teste = await taskRepository.buscarPorId(id);
        if (!teste) {
            throw new Error("Teste não encontrado");
        }
        return teste;
    };

    buscarTestesPorFiltro = async (grupoId, subGrupoId) => {
        const filtro = {};
        if (grupoId) filtro.grupo = grupoId;
        if (subGrupoId) filtro.subGrupo = subGrupoId;

        return await taskRepository.buscarPorFiltro(filtro);
    };

    atualizarTeste = async (id, data) => {
        const teste = await this.buscarPorId(id);
        if (!teste) {
            throw new Error("Teste não encontrado");
        }
        return await taskRepository.atualizarTeste(id, data);
    };


    excluirTeste = async (id) => {
        const teste = await this.buscarPorId(id);
        if (!teste) {
            throw new Error("Teste não encontrado");
        }
        return await taskRepository.excluirTeste(id);
    }
};

export default new TaskService();
