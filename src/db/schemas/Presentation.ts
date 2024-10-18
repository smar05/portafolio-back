import { Schema, model } from "mongoose";

const hvSchema = new Schema({
  url: { type: String, required: true },
  text: { type: String, required: true },
});

const videoSchema = new Schema({
  url: { type: String, required: true },
  text: { type: String, required: true },
});

const presentationSchema = new Schema({
  name: { type: String, required: true },
  tags: { type: String, required: true },
  hv: { type: hvSchema, required: true },
  video: { type: videoSchema, required: true },
  last: {
    type: Boolean,
    required: true,
  },
});

export const Presentation = model("Presentation", presentationSchema);
