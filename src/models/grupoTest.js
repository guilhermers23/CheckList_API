import mongoose from "mongoose";

const GrupoTesteSchema = new mongoose.Schema({
    grupo: {
        type: String,
        require: true
    }
});

const GrupoDeTeste = mongoose.model("GrupoDeTeste", GrupoTesteSchema);

export default GrupoDeTeste;
