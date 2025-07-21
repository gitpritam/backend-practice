import express from "express";
import { postStudentController } from "./controllers/students/postStudents.controller.js";
import { getAllStudentsController } from "./controllers/students/getAllStudents.controller.js";
import { getStudentController } from "./controllers/students/getStudent.controller.js";

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//student
//get all students
app.get("/students", getAllStudentsController);

//get student by id
app.get("/students/:college_id", getStudentController);

//post student (create student)
app.post("/students", postStudentController);

//put student (update student)
// app.put("/students/:college_id", updateStudentController);
//delete student (remove student)
// app.delete("/students/:college_id", deleteStudentController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
