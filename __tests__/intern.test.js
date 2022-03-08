const { Intern } = require("../src/lib");

describe("Intern", () => {
  const mockIntern = new Intern({
    school: "University of Birmingham",
    name: "Jhon Snow",
    id: "int23",
    email: "jhonsnow@email.com",
  });

  test("should be an instance of Intern", () => {
    expect(mockIntern).toBeInstanceOf(Intern);
  });

  test("should return the expected name", () => {
    const actual = "Jhon Snow";
    expect(mockIntern.getName()).toEqual(actual);
  });

  test("should return the expected id", () => {
    const actual = "int23";
    expect(mockIntern.getId()).toEqual(actual);
  });

  test("should return the expected email", () => {
    const actual = "jhonsnow@email.com";
    expect(mockIntern.getEmail()).toEqual(actual);
  });

  test("should return the expected school", () => {
    const actual = "University of Birmingham";
    expect(mockIntern.getSchool()).toEqual(actual);
  });

  test("should return the role", () => {
    const actual = "Intern";
    expect(mockIntern.getRole()).toEqual(actual);
  });
});
