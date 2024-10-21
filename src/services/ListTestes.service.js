import listTestesRepository from "../repositories/listTestes.repository.js";

const createTesteService = async ({ tecnico, grupo, subGrupo, description }) => {
    if (!tecnico || !grupo || !subGrupo || !description)
        throw new Error("Failed to send data! Check all fields.");

    const { id } = await listTestesRepository.createTesteRepository(
        tecnico,
        grupo,
        subGrupo,
        description
    );

    return {
        message: "Teste created successfully!",
        teste: { id, tecnico, grupo, subGrupo, description }
    };
};

const findAllListTestService = async () => {
    const testes = await listTestesRepository.findALLListTestRepository();
    if (testes.length === 0) throw new Error("No registered Testes!");

    return testes;
};


export default {
    createTesteService,
    findAllListTestService
}
