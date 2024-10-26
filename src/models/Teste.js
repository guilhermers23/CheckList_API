import mongoose from "mongoose";

const TestesSchema = new mongoose.Schema({
    tecnico: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    grupo: {
        type: mongoose.Types.ObjectId,
        ref: "GrupoDeTeste",
        required: true,
    },
    subGrupo: {
        type: mongoose.Types.ObjectId,
        ref: "SubGrupoDeTeste",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    resultado: {
        type: String,
        required: true,
    },
    completed: {
        type: Array,
        required: true,
    },
    observacao: {
        type: String,
        required: false,
    }
});

const Teste = mongoose.model("Teste", TestesSchema);

export default Teste;
