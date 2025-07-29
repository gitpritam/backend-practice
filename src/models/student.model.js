import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    student_id: {
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
    dept: {
      type: String,
      required: true,
      enum: ["CSE", "IT", "AIML", "ECE", "EE"],
    },
    current_year: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model("students", StudentSchema);
export default StudentModel;
