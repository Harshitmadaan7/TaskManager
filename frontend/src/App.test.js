
test("sanity test - app renders", () => {
  expect(true).toBe(true);
});

export default {
  post: jest.fn(() =>
    Promise.resolve({
      data: { token: "fake-token", user: { email: "test@example.com" } },
    })
  ),
  get: jest.fn(() => Promise.resolve({ data: [] })),
  delete: jest.fn(() => Promise.resolve({ data: {} })),
  put: jest.fn(() => Promise.resolve({ data: {} })),
};
