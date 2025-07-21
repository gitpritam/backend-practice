import express from "express";

const app = express();
const PORT = 5001;

//api
app.get("/", (req, res) => {
  //   return res.send("Hello World!");
  return res.status(200).json({ success: true, message: "Hello World!" });
});

//api
app.get("/user", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User endpoint",
    result: { name: "pritam", age: 25 },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
