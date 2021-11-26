const { Engineer } = require("../src/lib");

describe("Engineer", () => {
  const mockEngineer = new Engineer({
    github: "bsmith",
    name: "Bob Smith",
    id: "eng15",
    email: "bobsmith@email.com",
  });

  test("should be an instance of Engineer", () => {
    expect(mockEngineer).toBeInstanceOf(Engineer);
  });

  test("should return the expected name", () => {
    const actual = "Bob Smith";
    expect(mockEngineer.getName()).toEqual(actual);
  });

  test("should return the expected id", () => {
    const actual = "eng15";
    expect(mockEngineer.getId()).toEqual(actual);
  });

  test("should return the expected email", () => {
    const actual = "bobsmith@email.com";
    expect(mockEngineer.getEmail()).toEqual(actual);
  });

  test("should return the expected github", () => {
    const actual = "bsmith";
    expect(mockEngineer.getGithub()).toEqual(actual);
  });

  test("should return the role", () => {
    const actual = "Engineer";
    expect(mockEngineer.getRole()).toEqual(actual);
  });
});
