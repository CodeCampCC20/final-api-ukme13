import { object, ref, string } from "yup";

export const registerSchema = object({
  username: string()
    .min(5, "username ต้องมีอย่างน้อย 5 ตัว")
    .required("กรุณากรอก username"),
  password: string()
    .min(6, "รหัสผ่าน ต้องมีอย่างน้อย 6 ตัว")
    .required("กรุณากรอก password"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "รหัสผ่านยืนยันไม่ตรงกัน"
  ),
});

export const loginSchema = object({
  username: string()
    .min(5, "username ต้องมีอย่างน้อย 5 ตัว")
    .required("กรุณากรอก username"),
  password: string()
    .min(6, "รหัสผ่าน ต้องมีอย่างน้อย 6 ตัว")
    .required("กรุณากรอก password"),
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(",");
    const mergeErr = new Error(errTxt);
    next(mergeErr);
  }
};
