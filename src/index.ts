import express from "express";
import dbRoutes from "./routes/db-routes";
import cors from "cors";
import { connectDB } from "./db/mongo";
const app = express();
const PORT = process.env.PORT || 5000;

const startApp = async () => {
  app.use(cors());

  // Conectar a la base de datos
  await connectDB();

  app.use("/db", dbRoutes);
};

startApp();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
