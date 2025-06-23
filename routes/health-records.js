import express from "express";
import { authCheck } from "../middleware/auth.middleware.js";
import { createHR, deleteHRbyId, editHRbyId, getHR, getHRbyId } from "../controllers/health-records.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/health-records
router.post("/", authCheck, createHR);
router.get("/:id", authCheck, getHRbyId);
router.get("/", authCheck, getHR);
router.patch("/:id", authCheck, editHRbyId);
router.delete("/:id", authCheck, deleteHRbyId);

export default router;
