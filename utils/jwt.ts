import jwt, { JwtPayload } from "jsonwebtoken";
import { SECRET_KEY } from "./constant";

export const verifyToken = (token: string): string | JwtPayload => {
  return jwt.verify(token, SECRET_KEY);
};
