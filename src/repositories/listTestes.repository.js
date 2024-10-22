import ListTestes from "../models/testes.js";

const createTesteRepository = (tecnico, grupo, subGrupo, description, resultado) => {
    return ListTestes.create({ tecnico, grupo, subGrupo, description, resultado });
};

const findALLListTestRepository = () => {
    return ListTestes.find()
};


const deleteTesteRepository = (id) => {
    return ListTestes.findByIdAndDelete({ _id: id });
};

const updateTesteRepository = (id, tecnico, grupo, subGrupo, description, resultado, observacao) => {
    return ListTestes.findOneAndUpdate(
        {
            _id: id,
        },
        {
            tecnico, grupo, subGrupo, description, resultado, observacao
        },
        {
            rawResult: true,
        }
    );
};

const findTesteByIdRepository = (id) => ListTestes.findById(id);

export default {
    createTesteRepository,
    findALLListTestRepository,
    deleteTesteRepository,
    findTesteByIdRepository,
    updateTesteRepository
}
