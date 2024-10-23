import mongoose from "mongoose";

const SubGrupoDeTesteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    grupo: {
        type: mongoose.Types.ObjectId,
        ref: "GrupoDeTeste", // Referencia a coleção de GrupoDeTeste
        required: true,
    },
});

const SubGrupoDeTeste = mongoose.model("SubGrupoDeTeste", SubGrupoDeTesteSchema);

export default SubGrupoDeTeste;
