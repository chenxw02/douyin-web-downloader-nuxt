/* 测试接口 */
export default defineEventHandler(async (event) => {
  const { user_id } = event.context.auth;

  return `This is a Get Api, and testMiddleWare is ${user_id}`;
});
