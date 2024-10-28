import User from "../models/User.js";

class UserRepository {
    findAllUserRepository = async () => {
        return await User.find();
    };

    findByEmailUserRepository = async (email) => {
        return await User.findOne({ email: email });
    };

    createUserRepository = async ({ name, email, password, }) => {
        const novoUsuario = new User({ name, email, password });
        return await novoUsuario.save()
    };

    findByIdUserRepository = async (id) => {
        return await User.findById(id);
    };

    updateUserRepository = async (id, name, email, password) => {
        return await User.findByIdAndUpdate(
            { _id: id },
            { name, email, password },
            { rawResult: true }
        );
    };
};

export default new UserRepository();
