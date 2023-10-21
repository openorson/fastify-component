import mongoose, { Model, SchemaDefinitionProperty } from "mongoose";
import { ComponentModelDefinitions, ComponentModels } from "./model.types.js";
import { MODEL_FIELD_TYPES } from "./model.const.js";

export function defineModels<const ModelDefinitions extends ComponentModelDefinitions>(
  definitions: ModelDefinitions
): ComponentModels<ModelDefinitions> {
  const models = Object.entries(definitions).reduce((models, [modelName, modelDefinition]) => {
    const schema = new mongoose.Schema(
      Object.fromEntries(
        Object.entries(modelDefinition.fields).map(([fieldName, fieldDefinition]) => {
          const { comment, type, each, default: defaultValue, nullable, immutable, selectable, unique, sparse, text, index } = fieldDefinition;

          const field: SchemaDefinitionProperty = {
            comment,
            type: each ? [MODEL_FIELD_TYPES[type]] : MODEL_FIELD_TYPES[type],
            default: defaultValue,
            required: !(nullable ?? false),
            immutable: immutable ?? false,
            select: selectable ?? true,
            unique: unique ?? false,
            sparse: sparse ?? false,
            text: text ?? false,
            index: index ?? false,
          };

          if (type === "string") field["trim"] = true;
          if (type === "date") field["expires"] = fieldDefinition.expires;

          return [fieldName, field];
        })
      )
    );

    models[modelName] = mongoose.model(modelName, schema);

    return models;
  }, {} as Record<string, Model<any>>);

  return { [Symbol.for("definitions")]: definitions, models } as ComponentModels<ModelDefinitions>;
}
