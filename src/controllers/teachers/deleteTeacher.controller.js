import TeacherModel from "../../models/teacher.model.js";

const deleteTeacherController = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    console.log(teacher_id);

    if (!teacher_id) {
      return res
        .status(400)
        .json({ success: false, message: "Teacher id is required" });
    }

    //query from db
    const studentData = await TeacherModel.findOne({ teacher_id})
      .select("-__v")
      .sort("-updatedAt");

    if (!studentData) {
      return res
        .status(404)
        .json({ success: false, message: "Teacher not found with this id" });
    }

    await StudentModel.findOneAndDelete({ teacher_id });

    return res.status(204).json({
      success: true,
      message: "Teacher data deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};

export default deleteTeacherController;

