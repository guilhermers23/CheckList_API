import GrupoDeTeste from "../models/grupoTest.js";
import SubGrupoDeTeste from "../models/subGrupo.js";

const createGrupoRepository = (grupo) => {
    return GrupoDeTeste.create({ grupo });
};
const createSubGrupoRepository = (subGrupo) => {
    return SubGrupoDeTeste.create({subGrupo });
};

const findAllGrupoRepository = () => {
    return GrupoDeTeste.find()
};

const findAllSubGrupoRepository = () => {
    return SubGrupoDeTeste.find()
};

export default {
    createGrupoRepository,
    createSubGrupoRepository,
    findAllGrupoRepository,
    findAllSubGrupoRepository
};
