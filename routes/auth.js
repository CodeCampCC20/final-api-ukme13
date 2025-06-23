import express from "express";
import {
  loginSchema,
  registerSchema,
  validate,
} from "../validations/validator.js";
import { login, loginDoc, register, registerDoc } from "../controllers/auth.js";

const router = express.Router();

//ENDPOINT http://localhost:8000/auth/register
router.post("/register/user", validate(registerSchema), register);
router.post("/login/user", validate(loginSchema), login);
router.post("/register/doctor", validate(registerSchema), registerDoc);
router.post("/login/doctor", validate(loginSchema), loginDoc);

export default router;
