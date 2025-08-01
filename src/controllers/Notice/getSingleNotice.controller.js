//single notice details
//get all notice details
//post
//delete

import NoticeModel from "../../models/notice.model.js";

export const getSingleNoticeDetailsController = async (req, res) => {
  try {
    const { notice_id } = req.params;

    if (!notice_id) {
      return res.status(406).json({
        success: false,
        message: "Please enter the notice_id",
      });
    }
    const noticeData = await NoticeModel.findOne({ notice_id });
    if (!noticeData) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Notice found succesfully",
      result: noticeData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export default getSingleNoticeDetailsController;
