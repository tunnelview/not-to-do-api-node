import express from "express";
const app = express();

import fs from "fs";

app.use(express.urlencoded({ extended: true }));

// const path = require("path");
import path from "path";
const __dirname = path.resolve();

app.get("/register", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirname + "/form.html");
});

const fn = __dirname + "/userList.text";

app.post("/register", (req, res) => {
  console.log(req.body);
  // store in db

  const str1 = Object.values(req.body).join("|") + "\n";
  console.log(str1);

  // use fs to create a file

  fs.appendFile(fn, str1, (error) => {
    if (error) {
      console.log(error);
    }

    console.log("data is added");
  });

  res.send("Registered Successfully");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  fs.readFile(fn, (error, data) => {
    error && console.log(error);

    const userList = data.toString().split("\n");

    const found = userList.some((item) => {
      const userArg = item.split("|");
      const userEmail = userArg[1];
      const userPass = userArg[2];

      if (email === userEmail && password === userPass) {
        return true;
      }
    });

    console.log(found);
    found ? res.send("Login Successfully") : res.send("Login Failed");
  });
});

app.get("/", (req, res) => {
  res.send(`<h1>welcome to xyz</h1>
  <p>
  <a href="/register">register now </a>
  <a href="/login">login </a>
    </p>`);
});

app.listen(8000, (error) => {
  if (error) {
    console.log("Error");
  }

  console.log(`Server is running at http://localhost:8000`);
});
