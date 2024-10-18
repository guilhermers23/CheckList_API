import mongoose from "mongoose";

const SubGrupoTesteSchema = new mongoose.Schema({
    subGrupo: {
        type: String,
        require: true
    }
});

const SubGrupoDeTeste = mongoose.model("SubGrupoDeTeste", SubGrupoTesteSchema);

export default SubGrupoDeTeste;
