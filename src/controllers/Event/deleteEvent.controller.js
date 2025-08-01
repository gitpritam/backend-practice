import EventModel from "../../models/event.model";

const deleteEventController= async (req, res) => {
  try {
    const { title } = req.params;
    console.log(title);

    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }
    const eventData = await EventModel.findOne({ title });
    if (!eventData) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found with this name" });
    }

    await EventModel.findOneAndDelete({ notice_id });

    return res.status(204).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};
export default deleteEventController;
