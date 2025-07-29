import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("DB Connected successfully");
  } catch (error) {
    console.error("DB Connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
