import { Request, Response } from "express";
import { IPresentation } from "../interfaces/Ipresentation";
import { DbService, EnumDbTypes } from "../services/db.service";
import { IaboutMe } from "../interfaces/IaboutMe";
import { IeducationAndExperience } from "../interfaces/IeducationAndExperience";
import { Iskills } from "../interfaces/Iskills";
import { Icontact } from "../interfaces/Icontact";

export const presentation = async (req: Request, res: Response) => {
  const data: IPresentation = await DbService.get(EnumDbTypes.PRESENTATION);
  res.json(data);
};

export const aboutMe = async (req: Request, res: Response) => {
  const data: IaboutMe = await DbService.get(EnumDbTypes.ABOUT_ME);
  res.json(data);
};

export const educationAndExperience = async (req: Request, res: Response) => {
  const data: IeducationAndExperience = await DbService.get(
    EnumDbTypes.EDUCATION_AND_EXPERIENCE
  );
  res.json(data);
};

export const mySkills = async (req: Request, res: Response) => {
  const data: Iskills = await DbService.get(EnumDbTypes.SKILLS);
  res.json(data);
};

export const contactMe = async (req: Request, res: Response) => {
  const data: Icontact = await DbService.get(EnumDbTypes.CONTACT);
  res.json(data);
};
