import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    tecnico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    grupo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    subGrupo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubGroup',
        required: true
    },
    status: {
        type: String,
        enum: ['Em Progresso', 'Finalizado'], default: 'Em Progresso'
    },
    testes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test'
    }], // Lista de testes associados
    dataInicio: { type: Date, default: Date.now },
    dataFim: { type: Date }
});

const Sessao = mongoose.model("Sessao", SessionSchema);

export default Sessao;
