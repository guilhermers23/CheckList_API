import gruposRepository from "../repositories/grupos.repository.js";

const createGrupoService = async ({ grupo }) => {
    if (!grupo)
        throw new Error("Failed to send data! Check all fields.");

    const { id } = await gruposRepository.createGrupoRepository(
        grupo,
    );

    return {
        message: "Grupo created successfully!",
        grupo: { id, grupo }
    };
};

const createSubGrupoService = async ({ subGrupo }) => {
    if (!subGrupo)
        throw new Error("Failed to send data! Check all fields.");

    const { id } = await gruposRepository.createSubGrupoRepository(
        subGrupo,
    );

    return {
        message: "SubGrupo created successfully!",
        subGrupo: { id, subGrupo }
    };
};

const findAllGrupoService = async () => {
    const grupo = await gruposRepository.findAllGrupoRepository();
    if (grupo.length === 0) throw new Error("No registered Grupo!");

    return grupo;
};

const findAllSubGrupoService = async () => {
    const subGrupo = await gruposRepository.findAllSubGrupoRepository();
    if (subGrupo.length === 0) throw new Error("No registered SubGrupo!");

    return subGrupo;
};

export default {
    createGrupoService,
    createSubGrupoService,
    findAllGrupoService,
    findAllSubGrupoService
}
