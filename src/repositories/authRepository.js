import User from "../models/User.js";

class AuthRepository {
    loginRepository = async (email) => {
       return await User.findOne({ email: email }).select("+password");
    }
};

export default new AuthRepository();
