import express from "express";

const app = express();
const PORT = 5001;

app.use(express.json());

//api
app.get("/", (req, res) => {
  //   return res.send("Hello World!");
  return res.status(200).json({ success: true, message: "Hello World!" });
});

// //api
// app.get("/user", (req, res) => {
//   return res.status(200).json({
//     success: true,
//     message: "User endpoint",
//     result: { name: "pritam", age: 25 },
//   });
// });

//query params  ->   ?key=value       -> ?key=value&key2=value2&key3=value3
app.get("/user", (req, res) => {
  const { sort, limit, page } = req.query;
  console.log("Query Params:", sort, limit, page);

  return res.status(200).json({
    success: true,
    message: `${sort} ${limit} ${page}`,
    result: { name: "pritam", age: 25 },
  });
});

//url params  ->   /user/1
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  console.log("URL Params:", id);

  return res.status(200).json({
    success: true,
    message: `User ID: ${id}`,
    result: { name: "pritam", age: 25 },
  });
});

//body data
app.post("/login", (req, res) => {
  //   const loginData = req.body;
  const { email, password } = req.body;
  console.log("Login Data:", email, password);

  return res.status(200).json({ success: true, message: "Login successful!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
