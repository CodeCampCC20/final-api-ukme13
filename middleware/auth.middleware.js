import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";

export const authCheck = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      createError(401, "Token is missing!");
    }

    const token = header.split(" ")[1];

    jwt.verify(token, process.env.SECRET, (error,decode) => {
        if(error){
            createError(401, "Token is invalid!")
        }
        req.user = decode;
        next();
    })
  } catch (error) {
    next(error);
  }
};

export const doctorCheck = (req,res,next) => {
  try {
    if(req.user.role !== "Doctor"){
      createError(403, "You don't have permission to perform this action")
    }
    next();
  } catch (error) {
    next(error)
  }
} 
