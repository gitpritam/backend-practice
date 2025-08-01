import EventModel from "../../models/event.model";


export const getAllEventDetailsControlller = async (req, res) => {
  try {
    const eventData = await EventModel.find()
      .select("-__v")
      .sort("-updatedAt");

    if (!eventData || eventData.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No events found" });
    }

    return res.status(200).json({
      success: true,
      message: "Events found successfully",
      result: eventData,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
