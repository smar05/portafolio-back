import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function auth(req: Request, res: Response, next: NextFunction) {
  const token: string = req.header("Authorization") as string;

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado" });
  }

  try {
    const verified = jwt.verify(token, "miSecreto");
    (req as any).userVerified = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token no válido" });
  }
}

export default auth;
