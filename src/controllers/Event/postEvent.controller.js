import EventModel from "../../models/event.model.js";

export const postEventController = async (req, res) => {
  try {
    const {
      title,
      details,
      venue,
      start_date, //YYYY-MM-DD
      end_date,
      start_time,
      end_time,
    } = req.body;

    if (
      !title ||
      !details ||
      !venue ||
      !start_date ||
      !end_date ||
      !start_time
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }
    const payload = {
      title,
      details,
      venue,
      start_date: new Date(start_date),
      end_date: new Date(end_date),
      start_time,
    };
    if (end_time) payload.end_time = end_time;

    const eventData = await EventModel.create(payload);
    if (!eventData) {
      return res
        .status(400)
        .json({ message: "Event not submitted successfully" });
    }
    return res.status(201).json({
      success: true,
      message: "Event posted successfully",
      result: eventData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};
