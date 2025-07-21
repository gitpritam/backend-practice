export const postStudentController = async (req, res) => {
  try {
    const { name, college_id, dept, year, dob } = req.body;

    if (!name || !college_id || !dept || !year || !dob) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory" });
    }

    //create payload
    const payload = {
      name, //name:name
      college_id,
      dept,
      year,
      dob,
    };
    console.log(payload);
    //upload to db
    // const studentData =await

    return res.status(201).json({
      success: true,
      message: "Student profile created",
      //   result: studentData,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
