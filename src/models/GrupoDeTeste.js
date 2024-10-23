import mongoose from "mongoose";

const GrupoDeTesteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    }
});

const GrupoDeTeste = mongoose.model("GrupoDeTeste", GrupoDeTesteSchema);

export default GrupoDeTeste;
