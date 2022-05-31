import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { RequestHandler } from "express";

dotenv.config();

export const verifyToken : RequestHandler = (req : any, res, next) => {
  const token = req.headers["authorization"];
  console.log(req.headers);
  
  if (!token) {
    return res.status(400).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    console.log(decoded);
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }

  next();
};

