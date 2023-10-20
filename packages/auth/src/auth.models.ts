import { defineModels } from "@fastify-component/core";

export default defineModels({
  user: {
    comment: "用户",
    fields: {
      code: {
        type: "string",
        comment: "编号",
      },
      nickname: {
        type: "string",
        comment: "昵称",
      },
      avatar: {
        type: "string",
        comment: "头像",
      },
      phoneNumber: {
        type: "string",
        comment: "手机号码",
      },
      email: {
        type: "string",
        comment: "邮箱",
      },
      password: {
        type: "string",
        comment: "密码",
      },
      roles: {
        type: "string",
        comment: "角色",
        each: true,
      },
      username: {
        type: "string",
        comment: "真实姓名",
      },
      idCardNumber: {
        type: "string",
        comment: "身份证号码",
      },
      lastLoginAt: {
        type: "date",
        comment: "上次登录时间",
      },
    },
  },
});
