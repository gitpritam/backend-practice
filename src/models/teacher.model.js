import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
  {
    teacher_id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      minLength: 3,
      maxLength: 50,
      required: true,
    },
    phone: {
      type: String,
      minLength: [10, "Phone number must be at least 10 characters"],
      maxLength: [10, "Phone number must be at most 10 characters"],
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Phone number must be a valid 10-digit number"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Email must be a valid email address"],
    },
    dob: {
      type: Date,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TeacherModel = mongoose.model("teachers", TeacherSchema);
export default TeacherModel;
