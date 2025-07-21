export const getStudentController = async (req, res) => {
  try {
    const { college_id } = req.params;
    console.log(college_id);

    if (!college_id) {
      return res
        .status(400)
        .json({ success: false, message: "College_id is required" });
    }

    //query from db
    //const studentData = await

    if (!studentData) {
      return res
        .status(404)
        .json({ success: false, message: "student not found with this id" });
    }

    return res.status(200).json({
      success: true,
      message: "Student data found successfully",
      // result: studentData,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
