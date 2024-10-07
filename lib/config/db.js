import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(`${process.env.DATABASE_URI}/${process.env.DATABASE_NAME}`)
}