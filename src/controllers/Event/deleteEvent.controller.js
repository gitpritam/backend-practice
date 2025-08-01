import EventModel from "../../models/event.model.js";

const deleteEventController = async (req, res) => {
  try {
    const { _id } = req.params;
    console.log(_id);

    if (!_id) {
      return res
        .status(400)
        .json({ success: false, message: "_id is required" });
    }
    const eventData = await EventModel.findOne({ _id });
    if (!eventData) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found with this name" });
    }

    // await EventModel.findOneAndDelete({ _id });
    await EventModel.findByIdAndDelete(_id);

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
