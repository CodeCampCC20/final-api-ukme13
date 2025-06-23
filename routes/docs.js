import express from "express";
import { authCheck } from "../middleware/auth.middleware.js";
import { getDoc, updateDoc } from "../controllers/docs.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/doctors/me
router.get("/me", authCheck, getDoc);
router.patch("/me", authCheck, updateDoc);

export default router;