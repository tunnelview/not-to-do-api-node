import express from "express";
import res from "express/lib/response";
const app = express();
const PORT = 8000;

// Task api endpoints
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res.json({
    message: "You have reached the not to api server",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running on http://localhost:${PORT}`);
});
