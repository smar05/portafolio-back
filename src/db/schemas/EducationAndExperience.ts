import { Schema, model } from "mongoose";

const educationSchema = new Schema({
  name: { type: String, required: true },
  school: { type: String, required: true },
  begin: { type: String, required: true },
  end: { type: String, required: true },
  description: { type: String, required: false },
});

const experienceSchema = new Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  begin: { type: String, required: true },
  end: { type: String, required: true },
  time: { type: String, required: false },
  description: { type: String, required: false },
});

const educationAndExperienceSchema = new Schema({
  backTitle: { type: String, required: true },
  title: { type: String, required: true },
  educationSection: {
    title: { type: String, required: true },
    education: [educationSchema],
  },
  experienceSection: {
    title: { type: String, required: true },
    experience: [experienceSchema],
  },
  last: {
    type: Boolean,
    required: true,
  },
});

export const EducationAndExperience = model(
  "EducationAndExperience",
  educationAndExperienceSchema
);
