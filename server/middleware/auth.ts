export default defineEventHandler((event) => {
  // event.context.auth = { user: 123 }
  const user_id = event.node.req.headers.authorization || 'testAuthorization';
  // eslint-disable-next-line no-param-reassign
  event.context.auth = { user_id };
});
