import ListTestes from "../models/testes.js";

const createTesteRepository = (grupo, subGrupo, itHappened, descriptiontTest, tecnico) => {
    return ListTestes.create({ grupo, subGrupo, itHappened, descriptiontTest, tecnico });
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
