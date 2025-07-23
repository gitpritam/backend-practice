import { Router } from "express";
import { getAllTeachersController } from "../controllers/teachers/getallteachers.controller.js";
import { getTeachercontroller } from "../controllers/teachers/getTeacher.controller.js";
import { postTeacherController } from "../controllers/teachers/postTeachers.controller.js";

export const TeacherRouter = Router();
//get all teachers
TeacherRouter.get("/", getAllTeachersController);
//get teacher
TeacherRouter.get("/:teacher_id", getTeachercontroller);
//post teacher
TeacherRouter.post("/", postTeacherController);
