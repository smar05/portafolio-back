import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
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
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🚀 ~ login ~ isMatch:", isMatch);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    const token = jwt.sign({ userId: user._id }, "miSecreto", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};
