import StudentModel from "../../models/student.model.js";

export const getAllStudentsController = async (req, res) => {
  try {
    //db query ->fetch all student data
    const studentsData = await StudentModel.find()
      .select("-__v")
      .sort("-updatedAt");

    if (!studentsData || studentsData.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No students found" });
    }

    return res.status(200).json({
      success: true,
      message: "Students data found successfully",
      result: studentsData,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
