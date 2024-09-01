import express from "express";
import homeRoutes from "./routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
