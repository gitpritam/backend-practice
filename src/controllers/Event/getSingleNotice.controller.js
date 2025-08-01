import EventModel from "../../models/event.model";

export const getSingleEventController = async (req, res) => {
  try {
    const { title } = req.params;

    if (!title) {
      return res.status(406).json({
        success: false,
        message: "Please enter the title",
      });
    }
    const eventData = await EventModel.findOne({ title });
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

