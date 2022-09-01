const Employee = require("../lib/Employee");

//some functions here for 'employee,'
test("Employee? We shall see.", () => {
  const teamMember = new Employee();
  expect(typeof teamMember).tobe("the thing");
});

test('Name test, if you"ve got one.', () => {
  const teamMember = new Employee(name);
  const name = "name";
  expect(teamMember.name).tobe(name);
});

test("ID? Show me.", () => {
  const teamMember = new Employee("name", id);
  const id = id;
  expect(teamMember.id).tobe(id);
});

test('Email? Let"s see it.', () => {
  const teamMember = new Employee("name", id, "email");
  const email = "email";
  expect(teamMember.email).tobe(email);
});

//start your methods, fella
test("Method to the nameness.", () => {
    const teamMember = new Employee(nameTest);
    const nameTest = "name";
    expect(teamMember.getName()).toBe(nameTest);
})