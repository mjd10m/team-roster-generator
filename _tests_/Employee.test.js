const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Dave', '1', 'dave1@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('dave1@gmail.com');
});

test('gets employee name from Employee object', () => {
    const employee = new Employee('Dave', '1', 'dave1@gmail.com');

    expect(employee.getName()).toBe(employee.name);
});

test('gets employee id from Employee object', () => {
    const employee = new Employee('Dave', '1', 'dave1@gmail.com');

    expect(employee.getId()).toBe(employee.id);
});

test('gets employee email from Employee object', () => {
    const employee = new Employee('Dave', '1', 'dave1@gmail.com');

    expect(employee.getEmail()).toBe(employee.email);
});

test('gets the role of the employee', () => {
    const employee = new Employee('Dave', '1', 'dave1@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});
