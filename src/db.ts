import mongoose from "mongoose";
import config from "config";
import { ConnectionOptions } from "tls";

async function db() {
  const dbUri = config.get("dbUri") as string;
  try {
    await mongoose
      .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectionOptions)
      .then(() => {
        console.log(`DB connected.`);
      });
  } catch (e) {
    console.error(e);
  }
}

export default db;
