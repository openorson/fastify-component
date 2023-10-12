import { HydratedDocument, Model } from "mongoose";

export type DataFieldTypes = {
  id: string;
  string: string;
  number: number;
  boolean: boolean;
  date: Date;
  buffer: Buffer;
  bigInt: BigInt;
};

export interface DataField<Type extends keyof DataFieldTypes> {
  /** 数据类型 */
  type: Type;
  /** 数据说明 */
  comment: string;
  /** 默认值 */
  default?: DataFieldTypes[Type];
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
  /** 验证器 */
  validators?: null;
}

export interface IdField extends DataField<"id"> {}

export interface StringField extends DataField<"string"> {}

export interface NumberField extends DataField<"number"> {}

export interface BooleanField extends DataField<"boolean"> {}

export interface DateField extends DataField<"date"> {
  /** 是否建立TTL索引 */
  expires?: string | number;
}

export interface BufferField extends DataField<"buffer"> {}

export interface BigIntField extends DataField<"bigInt"> {}

export type RequiredKeys<T, K = keyof T> = K extends keyof T ? (T extends Required<Pick<T, K>> ? K : never) : never;
export type TupleField<Field extends { type: string; comment: string }, Option = Omit<Field, "type" | "comment">> = RequiredKeys<Option> extends never
  ? [Field["type"], Field["comment"], Option?]
  : [Field["type"], Field["comment"], Option];

export type DataFieldSchema =
  | TupleField<IdField>
  | TupleField<StringField>
  | TupleField<NumberField>
  | TupleField<BooleanField>
  | TupleField<DateField>
  | TupleField<BufferField>
  | TupleField<BigIntField>;

export interface DataOptions {
  comment: string;
  fields: Record<string, DataFieldSchema>;
}

export type DataSchemas = Record<string, DataOptions>;

export type DataModelField<Fields extends Record<string, DataFieldSchema>> = {
  [Name in keyof Fields]: DataFieldTypes[Fields[Name][0]];
};

export type DataModels<Schemas extends DataSchemas> = {
  [Name in keyof Schemas]: Model<HydratedDocument<DataModelField<Schemas[Name]["fields"]>>>;
};
