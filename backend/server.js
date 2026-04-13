import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";

import userRouter from "./routes/userRoute.js";
import incomeRouter from "./routes/incomeRoute.js";
import expenseRouter from "./routes/expenseRoute.js";
import dashboardRouter from "./routes/dashboardRoute.js";
import contactRouter from "./routes/contactRoute.js";
import path from "path";

const app = express();
const port = process.env.PORT || 4000;
const _dirname = path.resolve();
// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(_dirname, "/frontend/dist")));

// DB
connectDB();

// ROUTES
app.use("/api/user", userRouter);
app.use("/api/income", incomeRouter);
app.use("/api/expense", expenseRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});
app.use((req, res) => {
  res.sendFile(path.resolve("frontend/dist/index.html"));
});
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
