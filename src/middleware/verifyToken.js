import { response, request } from "express";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

export const verifyToken = (req = request, res = response, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        msg: "Token tidak ditemukan!",
      });
    }

    const tokenValue = token.split(" ")[1];
    const decodedBase64 = Buffer.from(
      process.env.JWT_SECRET || "90blwCqJS9jqHORniIxsCwmoCmhhszbOSxjvAZG92KM=",
      "base64"
    );

    jwt.verify(tokenValue, decodedBase64, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          msg: "Token tidak valid!",
        });
      }

      if (decoded.exp < Math.floor(Date.now() / 1000)) {
        return res.status(401).json({
          success: false,
          msg: "Token sudah expired",
        });
      }

      req.userId = decoded.sub;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      msg: "Token tidak valid!",
    });
  }
};
