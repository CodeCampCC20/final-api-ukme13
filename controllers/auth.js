import { prisma } from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//RegisterUser---------------------------------------------------------------------------------------
export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (user) {
      createError(400, "This username is already exist!");
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);

    const result = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    res.json({ message: `Register ${result.username} success!` });
  } catch (error) {
    next(error);
  }
};

//RegisterDoc---------------------------------------------------------------------------------------
export const registerDoc = async (req, res, next) => {
  try {
    const { username, password, specialization } = req.body;

    const user = await prisma.doctor.findFirst({
      where: {
        username: username,
      },
    });
    if (user) {
      createError(400, "Sorry Doctor, This username is already exist!");
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);

    const result = await prisma.doctor.create({
      data: {
        username,
        password: hashPassword,
        specialization: specialization,
      },
    });

    res.json({ message: `Register Doctor : ${result.username} success!` });
  } catch (error) {
    next(error);
  }
};

//LoginUser---------------------------------------------------------------------------------------
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!user) {
      createError(400, "Email or password incorrect!");
    }

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      createError(400, "Email or password incorrect!");
    }

    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });

    res.json({
      message: `Welcome back ${user.role} : ${user.username}`,
      payload: payload,
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

//LoginDoc---------------------------------------------------------------------------------------
export const loginDoc = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.doctor.findFirst({
      where: {
        username: username,
      },
    });

    if (!user) {
      createError(400, "Email or password incorrect!");
    }

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      createError(400, "Email or password incorrect!");
    }

    const payload = {
      id: user.id,
      username: user.username,
      specialization: user.specialization,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });

    res.json({
      message: `Welcome back ${user.role} : ${user.username}`,
      username: username,
      //   specialization: payload.specialization,
      payload: payload,
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};
