// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const protect = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).send("Access denied. No token provided.");
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

module.exports = { protect };
