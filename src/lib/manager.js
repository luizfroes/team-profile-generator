class Manager extends employee {
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {}

  getRole() {}
}
