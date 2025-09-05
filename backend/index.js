import express from "express";

const app = express();

// Middleware
import cors from "cors";
import morgan from "morgan";
app.use(cors({
  origin: "http://localhost:3000" // only allow this frontend
})); // to allow cross-origin requests (important for APIs)
app.use(express.json()); // to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // to see all requests in the console

// Routes
import userRoutes from "./routes/userRoutes.js";

app.use("/api/users", userRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;