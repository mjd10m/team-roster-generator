const Engineer = require('../lib/Engineer')




test('creates engineer object', () => {
    const engineer = new Engineer('Dave', '1', 'dave1@gmail.com', 'dave22');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('dave1@gmail.com');
    expect(engineer.github).toBe('dave22');

});

test('gets engineer github from Engineer object', () => {
    const engineer = new Engineer('Dave', '1', 'dave1@gmail.com', 'dave22');

    expect(engineer.getGithub()).toBe(engineer.github);
});

test('gets the role of the employee', () => {
    const engineer = new Engineer('Dave', '1', 'dave1@gmail.com', 'dave22');

    expect(engineer.getRole()).toBe('Engineer');
});
