/* 测试接口 */
export default defineEventHandler(async (event) => {
  const { user_id } = event.context.auth;

  return `Hello Wolrd Api Delete ${user_id}`;
});
