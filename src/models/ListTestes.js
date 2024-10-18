import mongoose from "mongoose";

const TestesSchema = new mongoose.Schema({
    // user: {
    //     user: {
    //         type: mongoose.Types.ObjectId,
    //         ref: "User",
    //         require: true,
    //     },
    system: {
        type: String,
        require: true
    },
    functionality: {
        type: String,
        require: true
    },
    descriptiontTest: {
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

const ListTestes = mongoose.model("ListTestes", TestesSchema);

export default ListTestes;
