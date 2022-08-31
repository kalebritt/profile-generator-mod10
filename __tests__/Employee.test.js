const Employee = require("../lib/Employee");

test("Employee? We shall see.", () => {
  const teamMember = new Employee();
  expect(typeof teamMember).tobe("the thing");
});
