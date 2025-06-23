import express from "express";
import morgan from "morgan";
import { errorHandling } from "./utils/errorHandling.js";
import { notFound } from "./utils/notFound.js";

//Routing import
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import docRouter from "./routes/docs.js";
import healthRecRouter from "./routes/health-records.js";
import doctorNoteRouter from "./routes/doctor-notes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//Routing
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/doctors", docRouter);
app.use("/health-records", healthRecRouter);
app.use("/doctor-notes", doctorNoteRouter);

//error handling
app.use(errorHandling);
app.use(notFound);

// ENDPOINT http://localhost:8000
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
