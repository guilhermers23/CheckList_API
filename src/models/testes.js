import mongoose from "mongoose";

const TestesSchema = new mongoose.Schema({
    tecnico: {
        type: String,
        require: true
    },
    grupo: {
        type: String,
        require: true
    },
    subGrupo: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    resultado: {
        type: String,
        require: true
    },
    completed: {
        type: Array,
        require: true
    },
    observacao: {
        type: String,
        require: false
    }
});

const Teste = mongoose.model("Teste", TestesSchema);

export default Teste;
