const { Engineer } = require("../src/lib");

describe("Engineer", () => {
  const mockEngineer = new Engineer({
    github: "ver",
    name: "ali",
    id: "ter",
    email: "outre",
  });

  test("should be an instance of Engineer", () => {
    expect(mockEngineer).toBeInstanceOf(Engineer);
  });

  test("should return the expected name", () => {
    const actual = "ali";
    expect(mockEngineer.getName()).toEqual(actual);
  });

  test("should return the expected id", () => {});

  test("should return the expected email", () => {});

  test("should return the expected github", () => {});

  test("should return the role", () => {});
});
