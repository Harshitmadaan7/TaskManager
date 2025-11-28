import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Load env variables
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // parse JSON bodies

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Basic test route
app.get("/", (req, res) => {
  res.json({ message: "StackWizard Task Manager API - Part 2 backend running ✅" });
});

// TODO: add routes (auth, tasks) later
// app.use("/api/auth", authRoutes);
// app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
