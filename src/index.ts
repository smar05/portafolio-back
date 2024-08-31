import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to backend portfolio!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
