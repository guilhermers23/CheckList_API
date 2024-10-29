// models/Session.js
import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    tecnicoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    grupo: {
        type: String,
        required: true
    },
    subgrupo: {
        type: String,
        required: true
    },
    tests: [
        {
            testName: String,
            status: String,
            resultado: String,
        },
    ],
    criadoEm: { type: Date, default: Date.now },
});

const Session = mongoose.model("Session", SessionSchema);

export default Session;
