const Manager = require('../lib/Manager')




test('creates manager object', () => {
    const manager = new Manager('Dave', '1', 'dave1@gmail.com', 'Building 1');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('dave1@gmail.com');
    expect(manager.officeNumber).toBe('Building 1');

});

test('gets the role of the employee', () => {
    const manager = new Manager('Dave', '1', 'dave1@gmail.com', 'Building 1');

    expect(manager.getRole()).toBe('Manager');
});