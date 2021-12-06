import { Schema, model } from "mongoose";

const ClientSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    providers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Provider",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Client = model("Client", ClientSchema);
