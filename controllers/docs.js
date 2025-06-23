import { prisma } from "../config/prisma.js";
import bcrypt from "bcryptjs";

export const getDoc = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await prisma.doctor.findFirst({
      where: {
        id: Number(id),
      },
      omit: {
        password: true,
      },
    });

    res.json({ result: user });
  } catch (error) {
    next(error);
  }
};

export const updateDoc = async (req, res, next) => {
  try {
    const { username, password, specialization } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    const oldUsername = await prisma.doctor.findFirst({
      where: {
        username: req.user.username,
      },
    });

    const user = await prisma.doctor.findFirst({
      where: {
        username: username,
      },
    });

    if (user) {
      //   createError(400, "This username is already exist!");
      const newUser = await prisma.doctor.update({
        where: {
          username: oldUsername.username,
        },
        data: {
          password: hashPassword,
          specialization: specialization,
        },
      });

      res.json({
        message: `Update password successfully! ${newUser.username}`,
        specialization: user.specialization,
      });
    }

    if (username !== oldUsername.username) {
      const user = await prisma.doctor.update({
        where: {
          username: oldUsername.username,
        },
        data: {
          username: username,
          password: hashPassword,
          specialization: specialization,
        },
      });
      res.json({
        message: `Update username and password successfully! ${user.username}. Please relogin for new token`,
        specialization: user.specialization,
      });
    }
  } catch (error) {
    next(error);
  }
};
