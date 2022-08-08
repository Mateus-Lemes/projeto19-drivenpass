import { createUser, findById, findUserByEmail, User } from "../Repositories/userRepositories.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signUpService(user: User) {
    const userExist = await findUserByEmail(user.email);

    if(userExist) {
        throw {
            type: "conflict",
            message: "Email já está em uso"
        }
    }

    await createUser({
        email: user.email,
        password: bcrypt.hashSync(user.password, 10)
    });
}

export async function signInService(body: User) {
    const user = await findUserByEmail(body.email);

    if(!user) {
        throw {
            type: "not found",
            message: "Não existe usuário com este email"
        }
    }

    if(!bcrypt.compareSync(body.password, user.password)) {
        throw {
            type: "unauthorized",
            message: "senha inserida não confere com usuário"
        }
    }

    const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY)

    return token
}

export async function findByUserId(id:number) {
    const user = await findById(id);
    if(!user) {
        throw {
            type: "Not Found",
            message: "No user was found"
        }
    }
    return user
}