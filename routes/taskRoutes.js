import express from "express";
import {
  createTask,
  getMyTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Task
router.post("/", protect, createTask);

// Get all tasks for logged-in user
router.get("/", protect, getMyTasks);

// Get single task
router.get("/:id", protect, getTaskById);

// Update task
router.put("/:id", protect, updateTask);

// Delete task
router.delete("/:id", protect, deleteTask);

export default router;
