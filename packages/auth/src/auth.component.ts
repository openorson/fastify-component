import { createRoute, defineComponent } from "@fastify-component/core";

export const AuthComponent = defineComponent({
  name: "auth",
  schemas: () => ({
    user: {
      comment: "用户",
      fields: {
        code: ["string", "用户编号"],
        nickname: ["string", "用户昵称"],
        avatar: ["string", "用户头像"],
        phoneNumber: ["string", "用户手机号码"],
        email: ["string", "用户邮箱"],
        password: ["string", "用户密码"],
        role: ["string", "用户角色"],
        username: ["string", "用户真实姓名"],
        idCardNumber: ["string", "用户身份证号码"],
      },
    },
    permission: {
      comment: "权限",
      fields: {
        type: ["string", "权限类型"],
        code: ["string", "权限编号"],
        name: ["string", "权限名称"],
        desc: ["string", "权限描述"],
      },
    },
    permissionGroup: {
      comment: "权限组",
      fields: {
        pid: ["id", "父权限组"],
        name: ["string", "权限组名称"],
        managers: ["id", "权限组管理员", { each: true }],
        users: ["id", "权限组成员", { each: true }],
        permissions: ["id", "拥有的权限", { each: true }],
      },
    },
  }),
  routes: () => ({
    "/login": createRoute({
      method: "GET",
      query: {
        a: "boolean!",
      },
      handler({ query }) {},
    }),
    "/logout": createRoute({
      method: "GET",
      query: {
        b: "number!",
      },
      handler({ query }) {},
    }),
  }),
});
