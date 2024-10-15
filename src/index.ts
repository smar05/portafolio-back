import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import { connectDB } from "./db/mongo";
import dbRoutes from "./routes/db-routes";
import setupSwagger from "./swagger";
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions: { [key: string]: any } = {
  origin: [process.env.FRONT_URL, "http://localhost:3001"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const startApp = async () => {
  dotenv.config();
  app.use(cors(corsOptions));
  app.options("*", cors(corsOptions));
  app.use(morgan("dev")); // Para mostrar por consola las peticiones http
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use("/public", express.static(path.join(__dirname, "build/public")));

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
