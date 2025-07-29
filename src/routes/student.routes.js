import { Router } from "express";
import { getAllStudentsController } from "../controllers/students/getAllStudents.controller.js";
import getStudentController from "../controllers/students/getStudent.controller.js";
import { postStudentController } from "../controllers/students/postStudents.controller.js";
import updateStudentController from "../controllers/students/updateStudent.controller.js";
import deleteStudentController from "../controllers/students/deleteStudent.controller.js";

export const StudentRouter = Router();
//student
//get all students
StudentRouter.get("/", getAllStudentsController);

//get student by id
StudentRouter.get("/:student_id", getStudentController);

//post student (create student)
StudentRouter.post("/", postStudentController);

//put student (update student)
StudentRouter.patch("/:student_id", updateStudentController);
//delete student (remove student)
StudentRouter.delete("/:student_id", deleteStudentController);
