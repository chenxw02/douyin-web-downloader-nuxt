export function testService(): Promise<any> {
  return useFetch('/api/test');
}
