import { Router } from "express";
import {
  aboutMe,
  contactMe,
  educationAndExperience,
  mySkills,
  presentation,
} from "../controllers/db.controller";

const router = Router();

router.get("/presentation", presentation);
router.get("/about-me", aboutMe);
router.get("/education-and-experience", educationAndExperience);
router.get("/my-skills", mySkills);
router.get("/contact-me", contactMe);

export default router;
