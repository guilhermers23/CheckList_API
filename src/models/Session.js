import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    tecnico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    grupo: {
        type: String,
        required: true
    },
    subGrupo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Em Progresso',
        require: true
    },
    testes: [{
        type: Array,
        require: true
    }], // Lista de testes associados
    dataInicio: { type: Date, default: Date.now },
    dataFim: { type: Date }
});

const Sessao = mongoose.model("Sessao", SessionSchema);

export default Sessao;
