import TeacherModel from "../../models/student.model.js";

const updateTeacherController = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    if (!teacher_id) {
      return res
        .status(400)
        .json({ success: false, message: "Teacher id is required" });
    }

    const { name, dob, qualification, phone, email } = req.body;
    const payload = {};
    if (name) payload.name = name;
    if (dob) payload.dob = new Date(dob);
    if(qualification) payload.qualification = qualification;
    if (phone) payload.phone = phone;
    if (email) payload.email = email;

    console.log(payload);

    const teacherData = await TeacherModel.findOne({ student_id });
    if (!teacherData) {
      return res
        .status(404)
        .json({ success: false, message: "Teacher not found with this id" });
    }

    const updatedTeacherData = await TeacherModel.findOneAndUpdate(
      { student_id },
      {
        $set: payload,
      },
      { new: true, runValidators: true }
    );
    if (!updatedTeacherData) {
      return res
        .status(404)
        .json({ success: false, message: "Teacher not found with this id" });
    }

    return res.status(200).json({
      success: true,
      message: "Teacher data updated successfully",
      result: updatedTeacherData,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};

export default updateTeacherController;
