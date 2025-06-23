import express from "express";
import { authCheck } from "../middleware/auth.middleware.js";
import { createHR, editHRbyId, getHR, getHRbyId } from "../controllers/user.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/health-records
router.post("/", authCheck, createHR);
router.get("/:id", authCheck, getHRbyId);
router.get("/", authCheck, getHR);
router.patch("/:id", authCheck, editHRbyId);

export default router;
