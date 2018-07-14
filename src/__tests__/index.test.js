import { createExpirableStorage } from "../index"

describe('export sanity test', () => {
  it('should always return a function for createExpiredStorage', () => {
    expect(createExpirableStorage).toBeInstanceOf(Function)
  });
})