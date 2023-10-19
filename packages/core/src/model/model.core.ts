import { Schema } from "mongoose";
import { ComponentModelDefinitions, ComponentModels } from "./model.types";

export const DATA_FIELD_TYPES = {
  id: Schema.Types.ObjectId,
  string: String,
  number: Number,
  boolean: Boolean,
  date: Date,
  buffer: Buffer,
  bigInt: BigInt,
};

export function defineModels<ModelDefinitions extends ComponentModelDefinitions>(definitions: ModelDefinitions): ComponentModels<ModelDefinitions> {
  return {} as ComponentModels<ModelDefinitions>;
}
