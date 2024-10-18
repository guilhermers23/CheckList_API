import listTestesRepository from "../repositories/listTestes.repository.js";

const createTesteService = async ({ tecnico, grupo, subGrupo, itHappened, descriptiontTest }) => {
    if (!tecnico || !grupo || !subGrupo || !descriptiontTest || !itHappened)
        throw new Error("Failed to send data! Check all fields.");

    const { id } = await listTestesRepository.createTesteRepository(
        tecnico,
        grupo,
        subGrupo,
        descriptiontTest,
        itHappened
    );

    return {
        message: "Teste created successfully!",
        teste: { id, tecnico, grupo, subGrupo, descriptiontTest, itHappened }
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
