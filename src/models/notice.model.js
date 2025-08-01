import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema(
  {
    notice_id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      minLength: [3, "Minimum 3 character allowed"],
      maxLength: [200, "Maximum 200 character allowed"],
    },
    description: {
      type: String,
      required: true,
      minLength: [3, "Minimum 3 character allowed"],
      maxLength: [1000, "Maximum 1000 character allowed"],
    },
    year: {
      type: Number,
      min: 1,
      max: 5,
    },
    posted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const NoticeModel = mongoose.model("notices", NoticeSchema);

export default NoticeModel;
 