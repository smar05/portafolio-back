import { Schema, model } from "mongoose";

const contactSchema: Schema = new Schema({
  backTitle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  placeholderName: {
    type: String,
    required: true,
  },
  placeholderEmail: {
    type: String,
    required: true,
  },
  placeholderSubject: {
    type: String,
    required: true,
  },
  placeholderMessage: {
    type: String,
    required: true,
  },
  textSubmit: {
    type: String,
    required: true,
  },
  myEmail: {
    type: String,
    required: true,
  },
  last: {
    type: Boolean,
    required: true,
  },
});

export const Contact = model("Contact", contactSchema);
