import express from "express";
const app = express();
const PORT = 8000;

// Task api endpoints
app.get(`/api/v1/tasks`, (req, res) => {
  res.json({
    message: "This is my api code",
  });
});

app.post(`/api/v1/tasks`, (req, res) => {
  res.json({
    message: "This will post data",
  });
});

app.patch(`/api/v1/tasks`, (req, res) => {
  res.json({
    message: "This will patch the data",
  });
});

app.delete(`/api/v1/tasks`, (req, res) => {
  res.json({
    message: "This will delete the data",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "You have reached the not to api server",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running on http://localhost:${PORT}`);
});
