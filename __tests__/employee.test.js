const Employee = require("../src/lib/Employee");

describe("Employee", () => {
  const mockEmployee = new Employee({
    name: "Luke Sky",
    id: "emp12",
    email: "lukesky@email.com",
  });

  test("should be an instance of Employee", () => {
    expect(mockEmployee).toBeInstanceOf(Employee);
  });

  test("should return the expected name", () => {
    const actual = "Luke Sky";
    expect(mockEmployee.getName()).toEqual(actual);
  });

  test("should return the expected id", () => {
    const actual = "emp12";
    expect(mockEmployee.getId()).toEqual(actual);
  });

  test("should return the expected email", () => {
    const actual = "lukesky@email.com";
    expect(mockEmployee.getEmail()).toEqual(actual);
  });

  test("should return the role", () => {
    const actual = "Employee";
    expect(mockEmployee.getRole()).toEqual(actual);
  });
});
