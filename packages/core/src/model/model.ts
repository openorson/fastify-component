import { Schema } from "mongoose";

export const DATA_FIELD_TYPES = {
  id: Schema.Types.ObjectId,
  string: String,
  number: Number,
  boolean: Boolean,
  date: Date,
  buffer: Buffer,
  bigInt: BigInt,
};
