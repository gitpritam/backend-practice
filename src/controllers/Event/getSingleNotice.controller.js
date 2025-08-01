import EventModel from "../../models/event.model.js";

export const getSingleEventController = async (req, res) => {
  try {
    const { _id } = req.params;

    if (!_id) {
      return res.status(406).json({
        success: false,
        message: "Please enter the _id",
      });
    }
    const eventData = await EventModel.findById(_id);
    if (!eventData) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Event found succesfully",
      result: eventData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export default getSingleEventController;
