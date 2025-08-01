export const postNoticeController = async (req, res) => {
  try {
    const { title, notice_id, description, year } = req.body;
    if (!title || !notice_id || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }
    const payload = {
      title,
      description,
      notice_id: crypto.randomUUID(),
    };
    if (year) payload.year = year;

    return res.status(201).json({
      success: true,
      message: "Notice posted successfully",
      //   result:
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
