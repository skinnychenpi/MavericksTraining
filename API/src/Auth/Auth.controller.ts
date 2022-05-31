import {User, userSchema} from './Auth.model'
import { RequestHandler } from 'express'
import {AuthService} from './Auth.service'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const register: RequestHandler = async (req, res, next) => {
    const service = new AuthService();
    service.register(req.body)
    .then((userWithToken) => {
        // save user token
        res.send({createdUser: userWithToken})
    })
    .catch((err) => {
        res.status(400).send({errorMessage: "Errors!"})
    })
}

export const login: RequestHandler = async (req, res, next) => {
    const service = new AuthService();
    service.login(req.body)
    .then((userWithToken) => {
        res.send({createdUser: userWithToken})
    })
    .catch( (err) => {
        res.status(400).send({errorMessage: "Errors!"});
    })
}


