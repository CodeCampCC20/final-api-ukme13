import { prisma } from "../config/prisma.js";

export const createHR = async (req, res, next) => {
  try {
    const { type, value } = req.body;

    const record = await prisma.healthRecord.create({
      data: {
        type: type,
        value: Number(value),
        userId: req.user.id,
      },
    });

    res.json({ message: `create health record successfully! ${record.type}` });
  } catch (error) {
    next(error);
  }
};

export const getHR = async (req, res, next) => {
  try {
    const id = req.user.id;

    const records = await prisma.healthRecord.findMany({
      where: {
        userId: Number(id),
      },
    });

    res.json({ records });
  } catch (error) {
    next(error);
  }
};

export const getHRbyId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await prisma.healthRecord.findFirst({
      where: {
        id: Number(id),
      },
    });

    res.json({ record });
  } catch (error) {
    next(error);
  }
};

export const editHRbyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { type, value } = req.body;

    const record = await prisma.healthRecord.update({
      where: {
        id: Number(id),
      },
      data: {
        type: type,
        value: Number(value),
        userId: req.user.id,
      },
    });

    res.json({ record });
  } catch (error) {
    next(error);
  }
};

export const deleteHRbyId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await prisma.healthRecord.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({ message: `Delete record : ${record.id} successfully!` });
  } catch (error) {
    next(error);
  }
};
