import { Schema } from "mongoose";

export const MODEL_FIELD_TYPES = {
  id: Schema.Types.ObjectId,
  string: String,
  number: Number,
  boolean: Boolean,
  date: Date,
  buffer: Buffer,
  bigInt: BigInt,
} as const;

export const MODEL_BASE_FIELDS = {
  id: {
    type: "id",
    comment: "唯一标识",
  },
  owner: {
    type: "string",
    comment: "所有者",
  },
  createdAt: {
    type: "date",
    comment: "创建于",
  },
  updatedAt: {
    type: "date",
    comment: "更新于",
  },
  deletedAt: {
    type: "date",
    comment: "删除于",
  },
  isDeleted: {
    type: "boolean",
    comment: "是否已删除",
  },
  version: {
    type: "number",
    comment: "版本",
  },
} as const;
