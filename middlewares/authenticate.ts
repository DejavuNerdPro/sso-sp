import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
//import customReq from "../utils/custom_request";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  try {
    (req as any).user = verifyToken(token);
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};
