import { Schema, model } from "mongoose";

const skillDataSchema = new Schema({
  name: { type: String, required: true },
  percentage: { type: Number, required: true },
  color: { type: String, required: true },
});

const skillSectionSchema = new Schema({
  title: { type: String, required: true },
  data: [skillDataSchema],
});

const skillsSchema = new Schema({
  backTitle: { type: String, required: true },
  title: { type: String, required: true },
  frontend: { type: skillSectionSchema, required: true },
  backend: { type: skillSectionSchema, required: true },
  last: {
    type: Boolean,
    required: true,
  },
});

export const Skills = model("Skills", skillsSchema);
