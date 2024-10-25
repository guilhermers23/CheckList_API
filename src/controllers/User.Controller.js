import userService from "../services/User.Service.js";

class UserController {
    createUserController = async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const token = await userService.createUserService({
                name,
                email,
                password,
            });

            return res.status(201).send({ token });
        } catch (e) {
            return res.status(400).send(e.message);
        }
    };

    findAllUserController = async (req, res) => {
        try {
            const users = await userService.findAllUserService();
            return res.send(users);
        } catch (e) {
            return res.status(404).send(e.message);
        }
    };

    findUserByIdController = async (req, res) => {
        try {
            const user = await userService.findUserByIdService(
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
            const { name, email, password } = req.body;
            const { id: userId } = req.params;
            const userIdLogged = req.userId;

            const response = await userService.updateUserService(
                { name, email, password },
                userId,
                userIdLogged
            );

            return res.send(response);
        } catch (e) {
            res.status(400).send(e.message);
        }
    };
};

export default new UserController();
