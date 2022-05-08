import express from "express";
const router = express.Router();

router.get(`/api/v1/tasks`, (req, res) => {
  res.json({
    message: "This is my api code",
  });
});

router.post(`/api/v1/tasks`, (req, res) => {
  res.json({
    message: "This will post data",
  });
});

router.patch(`/api/v1/tasks`, (req, res) => {
  res.json({
    message: "This will patch the data",
  });
});

router.delete(`/api/v1/tasks`, (req, res) => {
  res.json({
    message: "This will delete the data",
  });
});
