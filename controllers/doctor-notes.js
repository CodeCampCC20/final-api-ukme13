import { prisma } from "../config/prisma.js";

export const createDoctorNote = async (req, res, next) => {
  try {
    const { userId, note } = req.body;
    console.log(userId);
    console.log(req.user.id);

    const record = await prisma.doctorNote.create({
      data: {
        userId: Number(userId),
        note: note,
        doctorId: req.user.id,
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        id: Number(userId),
      },
      omit: {
        password: true,
      },
    });

    res.json({
      message: `create doctor notes successfully for ${user.username}`,
    });
  } catch (error) {
    next(error);
  }
};

export const getDoctorNote = async (req, res, next) => {
  try {
    const id = req.user.id;

    const notes = await prisma.doctorNote.findMany({
      where: {
        doctorId: Number(id),
      },
    });

    res.json( notes );
  } catch (error) {
    next(error);
  }
};

export const getDoctorNoteForPatient = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log(userId)

    const notes = await prisma.doctorNote.findMany({
      where: {
        userId: Number(userId),
      },
    });

    res.json( notes );
  } catch (error) {
    next(error);
  }
};

export const getReceivedNotes = async (req, res, next) => {
  try {
    const id = req.user.id;

    const notes = await prisma.doctorNote.findMany({
      where: {
        userId: Number(id),
      },
    });

    res.json({ notes });
  } catch (error) {
    next(error);
  }
};

export const updateNotesForPatient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { note } = req.body;

    const notebook = await prisma.doctorNote.update({
      where: {
        id: Number(id),
      },
      data: {
        note: note,
      },
    });

    res.json({ notebook });
  } catch (error) {
    next(error);
  }
};

export const deleteDoctorNotebyId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const note = await prisma.doctorNote.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({ message: `Delete note : ${note.id} successfully!` });
  } catch (error) {
    next(error);
  }
};
