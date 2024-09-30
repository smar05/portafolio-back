import cors from "cors";
import express from "express";
import { connectDB } from "./db/mongo";
import dbRoutes from "./routes/db-routes";
import setupSwagger from "./swagger";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 5000;

const startApp = async () => {
  app.use(cors());
  app.use(bodyParser.json());

  // Conectar a la base de datos
  await connectDB();

  app.use("/db", dbRoutes);
  // Configuración de Swagger
  setupSwagger(app);
};

startApp();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
