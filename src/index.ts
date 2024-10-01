import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { connectDB } from "./db/mongo";
import dbRoutes from "./routes/db-routes";
import setupSwagger from "./swagger";
const app = express();
const PORT = process.env.PORT || 5000;

const startApp = async () => {
  app.use(cors());
  app.use(morgan("dev")); // Para mostrar por consola las peticiones http
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
