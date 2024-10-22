import listTestesRepository from "../repositories/listTestes.repository.js";

const createTesteService = async ({ tecnico, grupo, subGrupo, description, resultado }) => {
    if (!tecnico || !grupo || !subGrupo || !description || !resultado)
        throw new Error("Failed to send data! Check all fields.");

    const { id } = await listTestesRepository.createTesteRepository(
        tecnico,
        grupo,
        subGrupo,
        description,
        resultado
    );

    return {
        message: "Teste created successfully!",
        teste: { id, tecnico, grupo, subGrupo, description, resultado }
    };
};

const findAllListTestService = async () => {
    const testes = await listTestesRepository.findALLListTestRepository();
    if (testes.length === 0) throw new Error("No registered Testes!");

    return testes;
};

const findTesteByIdService = async (id) => {
    const teste = await listTestesRepository.findTesteByIdRepository(id);

    if (!teste) throw new Error("Teste not found or deleted.");

    return {
        id: teste._id,
        tecnico: teste.tecnico,
        grupo: teste.grupo,
        subGrupo: teste.subGrupo,
        description: teste.description,
        resultado: teste.resultado,
        observacao: teste.observacao
    };
};

const updateTesteService = async (id, tecnico, grupo, subGrupo, description, resultado, observacao) => {
    if (!id && !tecnico && !grupo && !subGrupo && !description && !resultado && !observacao)
        throw new Error("Failed to send data! Please enter at least one field.");
    const teste = await listTestesRepository.findTesteByIdRepository(id);

    if (!teste) throw new Error("Teste not found.");

    await listTestesRepository.updateTesteRepository(id, tecnico, grupo, subGrupo, description, resultado, observacao);
};


const deleteTesteService = async (id) => {
    const teste = await listTestesRepository.findTesteByIdRepository(id);
    if (!teste) throw new Error("Teste not found.");
    await listTestesRepository.deleteTesteRepository(id);
};

export default {
    createTesteService,
    findAllListTestService,
    findTesteByIdService,
    deleteTesteService,
    updateTesteService
}
