import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import path from "path";
import { AboutMe } from "../db/schemas/AboutMe";
import { Contact } from "../db/schemas/Contact";
import { EducationAndExperience } from "../db/schemas/EducationAndExperience";
import { Presentation } from "../db/schemas/Presentation";
import { Skills } from "../db/schemas/Skills";
import { User } from "../db/schemas/User";
import { IaboutMe } from "../interfaces/IaboutMe";
import { Icontact } from "../interfaces/Icontact";
import { IeducationAndExperience } from "../interfaces/IeducationAndExperience";
import { IPresentation } from "../interfaces/Ipresentation";
import { Iskills } from "../interfaces/Iskills";
const { ObjectId } = mongoose.Types;

export const imgPresentation = (_req: Request, res: Response) => {
  const imagePath: string = path.join(
    __dirname,
    "..",
    "public",
    "img",
    "profile.png"
  );

  res.sendFile(imagePath);
};

export const presentation = async (req: Request, res: Response) => {
  const data: IPresentation = (await Presentation.findOne({
    last: true,
  })) as any;
  res.json(data);
};

export const aboutMe = async (req: Request, res: Response) => {
  const data: IaboutMe = (await AboutMe.findOne({ last: true })) as any;
  res.json(data);
};

export const educationAndExperience = async (req: Request, res: Response) => {
  const data: IeducationAndExperience = (await EducationAndExperience.findOne({
    last: true,
  })) as any;
  res.json(data);
};

export const mySkills = async (req: Request, res: Response) => {
  const data: Iskills = (await Skills.findOne({ last: true })) as any;
  res.json(data);
};

export const contactMe = async (req: Request, res: Response) => {
  const data: Icontact = (await Contact.findOne({ last: true })) as any;
  res.json(data);
};

export const login = async (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Usuario o contraseña incorrectos",
        autenticated: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🚀 ~ login ~ isMatch:", isMatch);
    if (!isMatch) {
      return res.status(400).json({
        message: "Usuario o contraseña incorrectos",
        autenticated: false,
      });
    }

    const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      return res
        .status(500)
        .json({ message: "Error en el servidor", autenticated: false });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, autenticated: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error en el servidor", autenticated: false });
  }
};

export const presentationEdit = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const bodyPresentation: IPresentation = req.body;

  try {
    await Presentation.findByIdAndUpdate(id, {
      ...bodyPresentation,
      last: true,
    });
  } catch (error) {
    console.log("🚀 ~ presentationEdit ~ error:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }

  return res
    .json({ message: "Finalizado con exito", actualizado: true })
    .status(200);
};

export const aboutMeEdit = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const bodyAboutMe: IaboutMe = req.body;

  try {
    await AboutMe.findByIdAndUpdate(id, {
      ...bodyAboutMe,
      last: true,
    });
  } catch (error) {
    console.log("🚀 ~ aboutMeEdit ~ error:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }

  return res
    .json({ message: "Finalizado con exito", actualizado: true })
    .status(200);
};

export const educationAndExperienceEdit = async (
  req: Request,
  res: Response
) => {
  const id: string = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const bodyEducationAndExperience: IeducationAndExperience = req.body;

  try {
    await EducationAndExperience.findByIdAndUpdate(id, {
      ...bodyEducationAndExperience,
      last: true,
    });
  } catch (error) {
    console.log("🚀 ~ educationAndExperienceEdit ~ error:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }

  return res
    .json({ message: "Finalizado con exito", actualizado: true })
    .status(200);
};

export const mySkillsEdit = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const bodySkills: Iskills = req.body;

  try {
    await Skills.findByIdAndUpdate(id, {
      ...bodySkills,
      last: true,
    });
  } catch (error) {
    console.log("🚀 ~ mySkillsEdit ~ error:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }

  return res
    .json({ message: "Finalizado con exito", actualizado: true })
    .status(200);
};

export const contactMeEdit = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const bodyContact: Icontact = req.body;

  try {
    await Contact.findByIdAndUpdate(id, {
      ...bodyContact,
      last: true,
    });
  } catch (error) {
    console.log("🚀 ~ contactMeEdit ~ error:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }

  return res
    .json({ message: "Finalizado con exito", actualizado: true })
    .status(200);
};

export const validateToken = (req: Request, res: Response) => {
  const token: string = req.header("Authorization") as string;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acceso denegado", tokenValido: false });
  }

  try {
    const verified = jwt.verify(token, "miSecreto");
    (req as any).userVerified = verified;
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Token no válido", tokenValido: false });
  }

  return res.status(200).json({ tokenValido: true });
};
