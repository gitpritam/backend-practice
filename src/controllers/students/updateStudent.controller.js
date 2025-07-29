import StudentModel from "../../models/student.model.js";

const updateStudentController = async (req, res) => {
  try {
    const { student_id } = req.params;
    if (!student_id) {
      return res
        .status(400)
        .json({ success: false, message: "Student id is required" });
    }

    const { name, dept, year, dob, phone, email } = req.body;
    const payload = {};
    if (name) payload.name = name;
    if (dept) payload.dept = dept;
    if (year) payload.current_year = year;
    if (dob) payload.dob = new Date(dob);
    if (phone) payload.phone = phone;
    if (email) payload.email = email;

    console.log(payload);

    const studentData = await StudentModel.findOne({ student_id });
    if (!studentData) {
      return res
        .status(404)
        .json({ success: false, message: "student not found with this id" });
    }

    const updatedStudentData = await StudentModel.findOneAndUpdate(
      { student_id },
      {
        $set: payload,
      },
      { new: true, runValidators: true }
    );
    if (!updatedStudentData) {
      return res
        .status(404)
        .json({ success: false, message: "student not found with this id" });
    }

    return res.status(200).json({
      success: true,
      message: "Student data updated successfully",
      result: updatedStudentData,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};

export default updateStudentController;
