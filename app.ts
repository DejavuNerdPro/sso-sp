import express from "express";
import { authenticate } from "./middlewares/authenticate";
import customReq from "./utils/custom_request";

const app = express();

// Protected Route
app.get("/protected", authenticate, (req, res) => {
  res.json({ message: "Welcome to the protected route!", user: (req as unknown as customReq).user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Service Provider running on http://localhost:${PORT}`);
});
