import { Router } from "express";
import { getAllStudentsController } from "../controllers/students/getAllStudents.controller.js";
import getStudentController from "../controllers/students/getStudent.controller.js";
import { postStudentController } from "../controllers/students/postStudents.controller.js";
import updateStudentController from "../controllers/students/updateStudent.controller.js";
import deleteStudentController from "../controllers/students/deleteStudent.controller.js";
import storage from "../config/multer.config.js";
import multer from "multer";

export const StudentRouter = Router();

const upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1mb
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/jpg",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg .png .webp files are allowed"));
    }
  },
});

//student
//get all students
StudentRouter.get("/", getAllStudentsController);

//get student by id
StudentRouter.get("/:student_id", getStudentController);

//post student (create student)
StudentRouter.post("/", upload.single("profile_photo"), postStudentController);

//put student (update student)
StudentRouter.patch("/:student_id", updateStudentController);
//delete student (remove student)
StudentRouter.delete("/:student_id", deleteStudentController);
