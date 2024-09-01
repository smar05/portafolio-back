import { Request, Response } from "express";

export const presentation = (req: Request, res: Response) => {
  res.send("presentation");
};

export const aboutMe = (req: Request, res: Response) => {
  res.send("aboutMe");
};

export const educationAndExperience = (req: Request, res: Response) => {
  res.send("educationAndExperience");
};

export const mySkills = (req: Request, res: Response) => {
  res.send("mySkills");
};

export const contactMe = (req: Request, res: Response) => {
  res.send("contactMe");
};
