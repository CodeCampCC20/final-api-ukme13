import express from "express";
import { authCheck, doctorCheck } from "../middleware/auth.middleware.js";
import {
  createDoctorNote,
  deleteDoctorNotebyId,
  getDoctorNote,
  getDoctorNoteForPatient,
  getReceivedNotes,
  updateNotesForPatient,
} from "../controllers/doctor-notes.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/doctor-notes
router.post("/", authCheck, doctorCheck, createDoctorNote);
router.get("/my-notes", authCheck, doctorCheck, getDoctorNote);
router.get("/user/:userId", authCheck, doctorCheck, getDoctorNoteForPatient);
router.get("/received", authCheck, getReceivedNotes);
router.patch("/:id", authCheck, doctorCheck, updateNotesForPatient);
router.delete("/:id", authCheck, doctorCheck, deleteDoctorNotebyId);

export default router;
