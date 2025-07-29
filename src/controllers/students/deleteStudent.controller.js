import StudentModel from "../../models/student.model.js";

const deleteStudentController = async (req, res) => {
  try {
    const { student_id } = req.params;
    console.log(student_id);

    if (!student_id) {
      return res
        .status(400)
        .json({ success: false, message: "Student id is required" });
    }

    //query from db
    const studentData = await StudentModel.findOne({ student_id })
      .select("-__v")
      .sort("-updatedAt");

    if (!studentData) {
      return res
        .status(404)
        .json({ success: false, message: "student not found with this id" });
    }

    await StudentModel.findOneAndDelete({ student_id });

    return res.status(204).json({
      success: true,
      message: "Student data deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};

export default deleteStudentController;
