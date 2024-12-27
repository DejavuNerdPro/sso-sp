"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticate_1 = require("./middlewares/authenticate");
const app = (0, express_1.default)();
// Protected Route
app.get("/protected", authenticate_1.authenticate, (req, res) => {
    res.json({ message: "Welcome to the protected route!", user: req.user });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Service Provider running on http://localhost:${PORT}`);
    console.log('Type of : ', typeof process.env.PORT, process.env.PORT);
});
