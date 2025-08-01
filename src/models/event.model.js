import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [2, "Minimum 2 character allowed"],
      maxLength: [20, "Maximum 20 character allowed"],
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
    venue:{
        type: String,
        required: true,
        minLength: [2,"Minimum 2 characters allowed"],
        maxLength: [50,"Maximum 50 characters allowed"],
    },
    time:{
        type: date,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const EventModel = mongoose.model("events", EventSchema);

export default EventModel;
