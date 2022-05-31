import { User, userSchema } from "./Auth.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {LoginDTO, LoginResponseDTO } from './Auth.dto';

export class AuthService {

    register = async (user : User) : Promise<{userName: string, email: string, token: string}> => {
        await userSchema.validateAsync(user);
        const hashedPwd = await bcrypt.hash(user.password, 10);
        user.password = hashedPwd;
        await User.create({...user});
        const token = jwt.sign(
            { userName: user.userName, email: user.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
        );
        
        let userWithToken = {userName: user.userName, email: user.email, token: token};
        
        return userWithToken;
    }

    login = async(user : LoginDTO) : Promise<LoginResponseDTO> => {
        await userSchema.fork(['userName'], (schema) => schema.optional()).validateAsync(user);
        let userFound = await User.findOne({ where: { email: user.email } })
        if (await bcrypt.compare(user.password, userFound.password)) {
            const token = jwt.sign(
                { userName: userFound.userName, email: user.email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
            );
            return {token: token};            
        } else {
            throw Error("Password Not Correct!");
        }
        
    }

}