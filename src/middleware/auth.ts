import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function auth(req: Request, res: Response, next: NextFunction) {
  const token: string | undefined = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acceso denegado", tokenInvalido: true });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).userVerified = verified; // Guarda el usuario verificado en la request
    next();
  } catch (error) {
    res.status(400).json({ message: "Token no válido", tokenInvalido: true });
  }
}

export default auth;
