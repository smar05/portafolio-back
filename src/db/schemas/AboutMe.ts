import { Schema, model } from "mongoose";

const aboutMeSchema = new Schema({
  backTitle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  experienceSince: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  freelance: {
    type: String,
    required: true,
  },
  last: {
    type: Boolean,
    required: true,
  },
});

export const AboutMe = model("AboutMe", aboutMeSchema);
