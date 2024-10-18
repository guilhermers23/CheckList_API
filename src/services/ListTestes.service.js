import listTestesRepository from "../repositories/ListTestes.repository.js";


const createTesteService = async ({ system, functionality, descriptiontTest }, userId) => {
    if (!system || !functionality || !descriptiontTest)
        throw new Error("Failed to send data! Check all fields.");

    const { id } = await listTestesRepository.createTesteRepository(
        system,
        functionality,
        descriptiontTest,
    );

    return {
        message: "Teste created successfully!",
        teste: { id, system, functionality, descriptiontTest }
    };
};

const findAllListTestService = async () => {
    const testes = await listTestesRepository.findALLListTestRepository();
    if (testes.length === 0) throw new Error("No registered Testes!");

    return testes;
}

export default {
    createTesteService,
    findAllListTestService
}
