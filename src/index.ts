import express from "express";
import dbRoutes from "./routes/db-routes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use("/db", dbRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
