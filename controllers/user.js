import { prisma } from "../config/prisma.js";
import bcrypt from "bcryptjs";

export const getMe = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await prisma.user.findFirst({
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

export const updateMe = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    const oldUsername = await prisma.user.findFirst({
      where: {
        username: req.user.username,
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (user) {
      //   createError(400, "This username is already exist!");
      const newUser = await prisma.user.update({
        where: {
          username: oldUsername.username,
        },
        data: {
          username: username,
          password: hashPassword,
        },
      });

      res.json({
        message: `Update password successfully! ${newUser.username}`,
      });
    }

    if (username !== oldUsername.username) {
      const user = await prisma.user.update({
        where: {
          username: oldUsername.username,
        },
        data: {
          username: username,
          password: hashPassword,
        },
      });
      res.json({
        message: `Update username and password successfully! ${user.username}. Please relogin for new token`,
      });
    }
  } catch (error) {
    next(error);
  }
};