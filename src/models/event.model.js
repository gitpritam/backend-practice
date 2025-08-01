import mongoose from "mongoose";

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [2, "Minimum 2 character allowed"],
      maxLength: [100, "Maximum 100 character allowed"],
    },
    details: {
      type: String,
      required: true,
      minLength: [3, "Minimum 3 character allowed"],
      maxLength: [1000, "Maximum 1000 character allowed"],
    },
    posted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: false,
    },
    venue: {
      type: String,
      required: true,
      minLength: [2, "Minimum 2 characters allowed"],
      maxLength: [50, "Maximum 50 characters allowed"],
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: { type: Date, required: true },
    start_time: {
      type: String,
      match: [timeRegex, "Time must be in HH:MM format"],
      required: true,
    },
    end_time: {
      type: String,
      match: [timeRegex, "Time must be in HH:MM format"],
    },
  },
  {
    timestamps: true,
  }
);

const EventModel = mongoose.model("events", EventSchema);

export default EventModel;
