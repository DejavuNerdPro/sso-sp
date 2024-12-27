"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constant_1 = require("./constant");
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, constant_1.SECRET_KEY);
};
exports.verifyToken = verifyToken;
