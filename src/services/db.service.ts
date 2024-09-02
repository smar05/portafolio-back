import { readFile } from "fs/promises";
import path from "path";

export enum EnumDbTypes {
  ABOUT_ME = "about-me",
  CONTACT = "contact",
  EDUCATION_AND_EXPERIENCE = "education-and-experience",
  PRESENTATION = "presentation",
  SKILLS = "skills",
}

const get: any = async (type: EnumDbTypes): Promise<any> => {
  const filePath: string = path.resolve(__dirname, `../db/${type}.json`);
  const file: string = await readFile(filePath, "utf-8");
  return JSON.parse(file);
};

export const DbService = {
  get,
};
