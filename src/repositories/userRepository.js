import User from "../models/User.js";

class UserRepository {
    findAllUserRepository = async () => {
        return await User.find();
    };

    findByEmailUserRepository = async (email) => {
        return await User.findOne({ email: email });
    };

    createUserRepository = async ({ name, email, password, admin }) => {
        const novoUsuario = new User({ name, email, password, admin: false });
        return await novoUsuario.save()
    };

    findByIdUserRepository = async (id) => {
        return await User.findById(id);
    };

    updateUserRepository = async (id, name, email, password, admin) => {
        return await User.findByIdAndUpdate(
            { _id: id },
            { name, email, password, admin },
            { rawResult: true }
        );
    };

    excluirUsuario = async (id) => {
        return await User.findByIdAndDelete(id);
    };
};

export default new UserRepository();
