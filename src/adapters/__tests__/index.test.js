import getAdapterByStorage from "../index"
import storageMock from "../../__mocks__/localStorageMock";

describe('getAdapterByStorage', () => {
  it('should return localStorage when provided localStorage', () => {
    // Arrange
    window.localStorage = storageMock()
    // Act
    const storage = getAdapterByStorage(window.localStorage);
    // Assert
    expect(storage).toBeDefined();
  });
  it('should default to localStorage when no storage provided', () => {
    // Arrange
    window.localStorage = storageMock()
    // Act
    const storage = getAdapterByStorage();
    // Assert
    expect(storage).toBeDefined();
  });
  it('should return sessionStorage when provided sessionStorage', () => {
    // Arrange
    window.sessionStorage = storageMock()
    // Act
    const storage = getAdapterByStorage(window.sessionStorage);
    // Assert
    expect(storage).toBeDefined();
});
})