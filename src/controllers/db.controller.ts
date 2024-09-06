import { Request, Response } from "express";
import { IPresentation } from "../interfaces/Ipresentation";
import { IaboutMe } from "../interfaces/IaboutMe";
import { IeducationAndExperience } from "../interfaces/IeducationAndExperience";
import { Iskills } from "../interfaces/Iskills";
import { Icontact } from "../interfaces/Icontact";
import { Presentation } from "../db/schemas/Presentation";
import { AboutMe } from "../db/schemas/AboutMe";
import { EducationAndExperience } from "../db/schemas/EducationAndExperience";
import { Skills } from "../db/schemas/Skills";
import { Contact } from "../db/schemas/Contact";

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
