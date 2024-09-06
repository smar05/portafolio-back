import mongoose from "mongoose";

const url: string =
  "mongodb+srv://mantillasanchezr:pghYPPUZY4n4fFCp@cluster0.xnya3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(url);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
    process.exit(1);
  }
};
