import ListTestes from "../models/testes.js";

const createTesteRepository = (tecnico, grupo, subGrupo, description) => {
    return ListTestes.create({ tecnico, grupo, subGrupo, description });
};

const findALLListTestRepository = () => {
    return ListTestes.find()
};

const deleteTesteRepository = (id) => {
    return ListTestes.findByIdAndDelete({ _id: id });
};

export default {
    createTesteRepository,
    findALLListTestRepository,
    deleteTesteRepository
}
