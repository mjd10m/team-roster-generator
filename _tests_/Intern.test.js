const Intern = require('../lib/Intern')




test('creates intern object', () => {
    const intern = new Intern('Dave', '1', 'dave1@gmail.com', 'FSU');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('dave1@gmail.com');
    expect(intern.school).toBe('FSU');

});

test('gets intern github from intern object', () => {
    const intern = new Intern('Dave', '1', 'dave1@gmail.com', 'FSU');

    expect(intern.getSchool()).toBe(intern.school);
});

test('gets the role of the employee', () => {
    const intern = new Intern('Dave', '1', 'dave1@gmail.com', 'FSU');

    expect(intern.getRole()).toBe('Intern');
});