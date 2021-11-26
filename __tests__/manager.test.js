const Manager = require("../src/lib/manager");

describe("Manager", () => {
  const mockManager = new Manager({
    officeNumber: "12345",
    name: "Ozzy Osborne",
    id: "man10",
    email: "princeofdarkness@email.com",
  });

  test("should be an instance of manager", () => {
    expect(mockManager).toBeInstanceOf(Manager);
  });

  test("should return the expected name", () => {
    const actual = "Ozzy Osborne";
    expect(mockManager.getName()).toEqual(actual);
  });

  test("should return the expected id", () => {
    const actual = "man10";
    expect(mockManager.getId()).toEqual(actual);
  });

  test("should return the expected email", () => {
    const actual = "princeofdarkness@email.com";
    expect(mockManager.getEmail()).toEqual(actual);
  });

  test("should return the expected office number", () => {
    const actual = "12345";
    expect(mockManager.getOfficeNumber()).toEqual(actual);
  });

  test("should return the role", () => {
    const actual = "Manager";
    expect(mockManager.getRole()).toEqual(actual);
  });
});
