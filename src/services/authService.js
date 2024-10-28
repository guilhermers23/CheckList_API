import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import userRepository from "../repositories/userRepository.js";

export function generateToken(id) {
    return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });
};

class AuthService {

    loginService = async ({ email, password }) => {
        const user = await userRepository.findByEmailUserRepository(email);
        if (!user) throw new Error("Senha ou Usuário incorreto.");

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) throw new Error("Senha ou Usuário incorreto.");

        const token = generateToken(user.id);

        return token;
    };
};

export default new AuthService();
