export const getAllStudentsController = async (req, res) => {
  try {
    //db query ->fetch all student data
    // const studentsData = await

    // if(!studentsData){
    //     return res.status(404).json({success:false,message:"No students found"});
    // }

    return res.status(200).json({
      success: true,
      message: "Students data found successfully",
      // result: studentsData,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
