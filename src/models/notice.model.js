import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema(
{
     Year: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
}},
  {
    timestamps: true,
  });

const StudentModel = mongoose.model("students", StudentSchema);
export default StudentModel;