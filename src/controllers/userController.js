import userService from "../services/userService.js";
import UserService from "../services/userService.js";

class UserController {
    createUserController = async (req, res) => {
        try {
            const { name, email, password, admin } = req.body;

            const token = await UserService.createUserService({
                name,
                email,
                password,
                admin
            });

            return res.status(201).send({ token });
        } catch (e) {
            return res.status(400).send(e.message);
        }
    };

    findAllUserController = async (req, res) => {
        try {
            const users = await UserService.findAllUserService();
            return res.send(users);
        } catch (e) {
            return res.status(404).send(e.message);
        }
    };

    findUserByIdController = async (req, res) => {
        try {
            const user = await UserService.findUserByIdService(
                req.params.id,
                req.userId
            );

            return res.send(user);
        } catch (e) {
            return res.status(400).send(e.message);
        }
    };

    updateUserController = async (req, res) => {
        try {
            const { name, email, password, admin } = req.body;
            const { id: userId } = req.params;
            const userIdLogged = req.userId;

            const response = await UserService.updateUserService(
                { name, email, password, admin },
                userId,
                userIdLogged
            );

            return res.send(response);
        } catch (e) {
            res.status(400).send(e.message);
        }
    };

    excluirUser = async (req, res) => {
        try {
            const { id } = req.params;
            const tecnico = req.userId;
            await userService.excluirUsuario(id, tecnico);
            return res.status(204).json({ message: "Teste Excluido com sucesso!" });
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    };
};

export default new UserController();
