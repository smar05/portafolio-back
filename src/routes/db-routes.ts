import { Router } from "express";
import {
  aboutMe,
  contactMe,
  educationAndExperience,
  login,
  mySkills,
  presentation,
} from "../controllers/db.controller";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Presentation:
 *       type: object
 *       properties:
 *         profileImg:
 *           type: string
 *           description: URL of the profile image
 *           example: "https://example.com/profile.jpg"
 *         name:
 *           type: string
 *           description: Name of the person
 *           example: "John Doe"
 *         tags:
 *           type: string
 *           description: Tags associated with the person
 *           example: "developer, fullstack"
 *         hv:
 *           type: object
 *           properties:
 *             url:
 *               type: string
 *               description: URL to the resume or CV
 *               example: "https://example.com/cv.pdf"
 *             text:
 *               type: string
 *               description: Text for the resume link
 *               example: "Download CV"
 *         video:
 *           type: object
 *           properties:
 *             url:
 *               type: string
 *               description: URL of the video presentation
 *               example: "https://example.com/video.mp4"
 *             text:
 *               type: string
 *               description: Text for the video link
 *               example: "Watch video"
 *         last:
 *           type: boolean
 *           description: Indicator if this is the last presentation in a list
 *           example: true
 *
 * /presentation:
 *   get:
 *     summary: Retrieve a presentation
 *     description: Get the presentation data including profile image, name, tags, resume, and video.
 *     responses:
 *       200:
 *         description: A presentation object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Presentation'
 */
router.get("/presentation", presentation);
/**
 * @swagger
 * components:
 *   schemas:
 *     AboutMe:
 *       type: object
 *       properties:
 *         backTitle:
 *           type: string
 *           description: Background title
 *           example: "Full Stack Developer"
 *         title:
 *           type: string
 *           description: Main title
 *           example: "John Doe"
 *         subTitle:
 *           type: string
 *           description: Subtitle or profession
 *           example: "Software Engineer"
 *         content:
 *           type: string
 *           description: Biography or about me content
 *           example: "I am a software engineer with 10 years of experience..."
 *         name:
 *           type: string
 *           description: Full name
 *           example: "John Doe"
 *         degree:
 *           type: string
 *           description: Degree or academic qualification
 *           example: "Master's in Computer Science"
 *         birthday:
 *           type: string
 *           description: Date of birth
 *           example: "1990-05-21"
 *         experienceSince:
 *           type: integer
 *           description: Year when the professional experience started
 *           example: 2012
 *         phone:
 *           type: string
 *           description: Phone number
 *           example: "+123456789"
 *         email:
 *           type: string
 *           description: Email address
 *           example: "johndoe@example.com"
 *         freelance:
 *           type: string
 *           description: Availability for freelance work
 *           example: "Available"
 *         last:
 *           type: boolean
 *           description: Indicator if this is the last profile section
 *           example: true
 *
 * /about-me:
 *   get:
 *     summary: Retrieve personal and professional information
 *     description: Get the 'About Me' section details, including personal info, degree, and experience.
 *     responses:
 *       200:
 *         description: A JSON object containing personal details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AboutMe'
 */
router.get("/about-me", aboutMe);
/**
 * @swagger
 * components:
 *   schemas:
 *     EducationItem:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Degree or qualification name
 *           example: "Bachelor of Computer Science"
 *         school:
 *           type: string
 *           description: School or university name
 *           example: "MIT"
 *         begin:
 *           type: string
 *           description: Start date of the education
 *           example: "2010-09-01"
 *         end:
 *           type: string
 *           description: End date of the education
 *           example: "2014-06-30"
 *         description:
 *           type: string
 *           description: Short description of the education
 *           example: "Graduated with honors in computer science"
 *
 *     ExperienceItem:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Job position name
 *           example: "Software Engineer"
 *         company:
 *           type: string
 *           description: Company name
 *           example: "Google"
 *         begin:
 *           type: string
 *           description: Start date of the job
 *           example: "2016-01-01"
 *         end:
 *           type: string
 *           description: End date of the job
 *           example: "2020-12-31"
 *         time:
 *           type: string
 *           description: Duration of the job
 *           example: "4 years"
 *         description:
 *           type: string
 *           description: Short description of the job responsibilities
 *           example: "Worked on full-stack development and cloud solutions."
 *
 *     EducationAndExperience:
 *       type: object
 *       properties:
 *         backTitle:
 *           type: string
 *           description: Background title
 *           example: "Education and Experience"
 *         title:
 *           type: string
 *           description: Section title
 *           example: "My Education & Work Experience"
 *         educationSection:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               description: Title of the education section
 *               example: "Education"
 *             education:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EducationItem'
 *         experienceSection:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               description: Title of the experience section
 *               example: "Experience"
 *             experience:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ExperienceItem'
 *         last:
 *           type: boolean
 *           description: Indicator if this is the last section
 *           example: true
 *
 * /education-and-experience:
 *   get:
 *     summary: Retrieve education and experience information
 *     description: Get the 'Education and Experience' section details, including academic background and work experience.
 *     responses:
 *       200:
 *         description: A JSON object containing education and experience details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EducationAndExperience'
 */
router.get("/education-and-experience", educationAndExperience);
/**
 * @swagger
 * components:
 *   schemas:
 *     SkillItem:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the skill
 *           example: "JavaScript"
 *         percentage:
 *           type: number
 *           description: Proficiency percentage
 *           example: 85
 *         color:
 *           type: string
 *           description: Color representing the skill proficiency
 *           example: "#f1c40f"
 *
 *     SkillsSection:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Section title
 *           example: "Frontend Skills"
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/SkillItem'
 *
 *     Skills:
 *       type: object
 *       properties:
 *         backTitle:
 *           type: string
 *           description: Background title for the skills section
 *           example: "My Skills"
 *         title:
 *           type: string
 *           description: Main title of the skills section
 *           example: "Skills Overview"
 *         frontend:
 *           type: object
 *           $ref: '#/components/schemas/SkillsSection'
 *         backend:
 *           type: object
 *           $ref: '#/components/schemas/SkillsSection'
 *         last:
 *           type: boolean
 *           description: Indicator if this is the last section
 *           example: true
 *
 * /my-skills:
 *   get:
 *     summary: Retrieve skills information
 *     description: Get the 'My Skills' section details, including frontend and backend skill sets.
 *     responses:
 *       200:
 *         description: A JSON object containing skills details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skills'
 */
router.get("/my-skills", mySkills);
/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       properties:
 *         backTitle:
 *           type: string
 *           description: Background title for the contact section
 *           example: "Get in Touch"
 *         title:
 *           type: string
 *           description: Main title of the contact section
 *           example: "Contact Me"
 *         placeholderName:
 *           type: string
 *           description: Placeholder for the name input field
 *           example: "Your Name"
 *         placeholderEmail:
 *           type: string
 *           description: Placeholder for the email input field
 *           example: "Your Email"
 *         placeholderSubject:
 *           type: string
 *           description: Placeholder for the subject input field
 *           example: "Subject"
 *         placeholderMessage:
 *           type: string
 *           description: Placeholder for the message textarea
 *           example: "Your Message"
 *         textSubmit:
 *           type: string
 *           description: Text for the submit button
 *           example: "Send Message"
 *         myEmail:
 *           type: string
 *           description: Contact email address
 *           example: "example@domain.com"
 *         last:
 *           type: boolean
 *           description: Indicator if this is the last section
 *           example: true
 *
 * /contact-me:
 *   get:
 *     summary: Retrieve contact information
 *     description: Get the 'Contact Me' section details, including placeholders and email contact.
 *     responses:
 *       200:
 *         description: A JSON object containing contact details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 */
router.get("/contact-me", contactMe);
router.post("/login", login);

export default router;
