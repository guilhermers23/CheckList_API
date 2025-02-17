import bcrypt from "bcrypt";
import UserRepository from "../repositories/userRepository.js";
import { generateToken } from "./authService.js";
import userRepository from "../repositories/userRepository.js";

class UserService {
    createUserService = async ({ name, email, password }) => {
        if (!name || !email || !password)
            throw new Error("Falha ao enviar dados! Verifique todos os campos.");

        const foundUser = await UserRepository.findByEmailUserRepository(email);
        if (foundUser) throw new Error("Usuário já cadastrado.");

        const user = await UserRepository.createUserRepository({
            name,
            email,
            password
        });

        if (!user) throw new Error("Usuário registrado com Sucesso!");

        const token = generateToken(user.id);

        return token;
    };

    findAllUserService = async () => {
        const users = await UserRepository.findAllUserRepository();
        if (users.length === 0) throw new Error("Nenhum Usuário encontrado!");

        return users;
    };

    findUserByIdService = async (userIdParam, userIdLogged) => {
        let idParam;
        if (!userIdParam) {
            userIdParam = userIdLogged;
            idParam = userIdParam;
        } else {
            idParam = userIdParam;
        }
        if (!idParam)
            throw new Error("Envie um id nos parâmetros para procurar o usuário.");

        const user = await UserRepository.findByIdUserRepository(idParam);
        if (!user) throw new Error("Nenhum Usuário registrado!");

        return user;
    };

    updateUserService = async ({ name, email, password, admin },
        userId, userIdLogged) => {

        if (!name && !email && !password && !admin)
            throw new Error("Falha ao enviar durante a atualização dos dados! Altere pelo menos alguns campos.");

        const user = await UserRepository.findByIdUserRepository(userId);

        if (user._id != userIdLogged) throw new Error("Você não pode atualizar esse usuário.");

        if (password) password = await bcrypt.hash(password, 10);

        await UserRepository.updateUserRepository(
            userId,
            name,
            email,
            password,
            admin
        );

        return { message: "Usuario Atualizado!" };
    };

    excluirUsuario = async (id) => {
        const user = await this.findUserByIdService(id);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        return await userRepository.excluirUsuario(id);
    };
};

export default new UserService();
