import jwt from "jsonwebtoken";
import "dotenv/config";
import UserRepository from "../repositories/user.repository.js";

class AuthMiddleware {

    validTokenhMiddleware = (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader)
                return res.status(401)
                    .send({ message: "O token não foi informado!" });

            const parts = authHeader.split(" ");
            if (parts.length !== 2)
                return res.status(401)
                    .send({ message: "Token inválido!" });

            const [scheme, token] = parts;

            if (!/^Bearer$/i.test(scheme))
                return res.status(401)
                    .send({ message: "Token malformatado!" });

            jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
                if (error) return res.status(401)
                    .send({ message: "Token inválido!" });

                const user = await UserRepository.findByIdUserRepository(decoded.id);
                if (!user || !user.id)
                    return res.status(401)
                        .send({ message: "Token inválido!" });

                req.userId = user.id;
                req.userName = user.username;
                return next();
            });
        } catch (e) {
            console.error(e)
        }
    };
};

export default new AuthMiddleware();
