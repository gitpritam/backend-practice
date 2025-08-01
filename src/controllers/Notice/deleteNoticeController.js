import NoticeModel from "../../models/notice.model";

const deleteNoticeController = async (req, res) => {
  try {
    const { notice_id } = req.params;
    console.log(notice_id);

    if (!notice_id) {
      return res
        .status(400)
        .json({ success: false, message: "Notice id is required" });
    }
    await NoticeModel.findOneAndDelete({ notice_id });

    if (!noticeData) {
      return res
        .status(404)
        .json({ success: false, message: "Notice not found with this id" });
    }
    await NoticeModel.findOneAndDelete({ notice_id });

    return res.status(204).json({
      success: true,
      message: "Notice deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
  };
  export default deleteNoticeController;
