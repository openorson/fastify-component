import { HydratedDocument, Model } from "mongoose";

export interface ModelFieldTypes {
  id: string;
  string: string;
  number: number;
  boolean: boolean;
  date: Date;
  buffer: Buffer;
  bigInt: BigInt;
}

export interface ModelField<Type extends keyof ModelFieldTypes> {
  /** 字段类型 */
  type: Type;
  /** 字段说明 */
  comment: string;
  /** 默认值 */
  default?: ModelFieldTypes[Type];
  /** 是否为数组 */
  each?: boolean;
  /** 是否可为空 */
  nullable?: boolean;
  /** 是否不可变 */
  immutable?: boolean;
  /** 是否默认可查 */
  selectable?: boolean;
  /** 是否建立唯一索引 */
  unique?: boolean;
  /** 是否建立稀疏索引 */
  sparse?: boolean;
  /** 是否建立文本索引 */
  text?: boolean;
  /** 是否建立普通索引 */
  index?: "2d" | "2dsphere" | "geoHaystack" | "hashed" | "text" | "ascending" | "asc" | "descending" | "desc";
}

export interface IdField extends ModelField<"id"> {}

export interface StringField extends ModelField<"string"> {}

export interface NumberField extends ModelField<"number"> {}

export interface BooleanField extends ModelField<"boolean"> {}

export interface DateField extends ModelField<"date"> {
  /** 是否建立TTL索引 */
  expires?: string | number;
}

export interface BufferField extends ModelField<"buffer"> {}

export interface BigIntField extends ModelField<"bigInt"> {}

export type ModelsFields = IdField | StringField | NumberField | BooleanField | DateField | BufferField | BigIntField;

export interface ComponentModelDefinition {
  comment: string;
  fields: Record<string, ModelsFields>;
}

export type ComponentModelDefinitions = Record<string, ComponentModelDefinition>;

export type ComponentModelFields<Fields extends Record<string, ModelsFields>> = {
  [Name in keyof Fields]: ModelFieldTypes[Fields[Name]["type"]];
};

export type ComponentModels<Models extends ComponentModelDefinitions> = {
  [Name in keyof Models]: Model<HydratedDocument<ComponentModelFields<Models[Name]["fields"]>>>;
};
