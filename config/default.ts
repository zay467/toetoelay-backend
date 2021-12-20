import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 4000,
  dbUri: process.env.MONGO_DB_URI,
};
