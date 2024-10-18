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
    descriptiontTest: {
        type: String,
        require: true
    },
    itHappened: {
        type: String,
        require: true
    },
    completed: {
        type: Array,
        require: true
    },
    observations: {
        type: String,
        require: false
    }
});

const Teste = mongoose.model("Teste", TestesSchema);

export default Teste;
