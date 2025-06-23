import express from "express";
import { authCheck } from "../middleware/auth.middleware.js";
import { getMe, updateMe } from "../controllers/user.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/users/me
router.get("/me", authCheck, getMe);
router.patch("/me", authCheck, updateMe);

export default router;
