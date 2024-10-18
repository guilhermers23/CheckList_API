import mongoose from "mongoose";

const connetcDatabase = () => {
    console.log("Wait connection to the database...")

    mongoose.connect(process.env.URL_MOOGODB)
        .then(() => console.log("Banco MongoDB Atlas connected."))
        .catch((e) => console.log(e));
}

export default connetcDatabase;
