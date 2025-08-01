import StudentModel from "../../models/student.model.js";

export const postStudentController = async (req, res) => {
  try {
    const { name, dept, year, dob, phone, email } = req.body;

    if (!name || !dept || !year || !dob || !phone || !email) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory" });
    }

    const student_id = crypto.randomUUID();
    console.log(student_id);
    if (!student_id) {
      return res.status(400).json({ message: "Student id not generated" });
    }

    //create payload
    const payload = {
      student_id,
      name,
      phone,
      email,
      dept,
      current_year: Number(year),
      dob: new Date(dob),
    };
    if (req.file) {
      payload.profile_photo = req.file.path;
    }
    console.log(payload);
    //upload to db
    const studentData = await StudentModel.create(payload);
    if (!studentData) {
      return res
        .status(400)
        .json({ message: "Student profile not submitted successfully" });
    }
    return res.status(201).json({
      success: true,
      message: "Student profile created",
      result: studentData,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};
