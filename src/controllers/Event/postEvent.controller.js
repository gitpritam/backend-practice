import EventModel from "../../models/event.model";

export const postEventController = async (req, res) => {
  try {
    const { title,details, venue } = req.body;
    if (!title || !details || !venue) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }
    const payload = {
      title,
      details,
      venue
    };
    const eventData = await EventModel.create(payload);
    if (!eventData) {
      return res
        .status(400)
        .json({ message: "Event not submitted successfully" });
    }
    return res.status(201).json({
      success: true,
      message: "Event posted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
