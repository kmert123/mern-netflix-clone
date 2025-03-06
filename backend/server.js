// const express = require('express'); // CommonJS
import express from "express";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import tvRoutes from "./routes/tv.route.js";
import cookieParser from "cookie-parser";
import { protectRoute } from "./middleware/protectRoute.js";
import searchRoutes from "./routes/search.route.js";
import path from "path";
// import mediaRoutes from "./routes/media.routes.js";

const app = express();
const PORT = ENV_VARS.PORT;

const __dirname = path.resolve();

app.use(express.json()); // will parse req body's
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

if (ENV_VARS.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
// app.use("/api/v1/media", mediaRoutes);,

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
  connectDB();
});
