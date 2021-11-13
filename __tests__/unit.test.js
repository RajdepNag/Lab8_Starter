// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//function isPhoneNumber
test('check valid phone number 1', () => {
    // TODO

    expect(functions.isPhoneNumber('123')).toBe(false);
});
test('check valid phone number 2', () => {
    // TODO

    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('check valid phone number 3', () => {
    // TODO

    expect(functions.isPhoneNumber('1 2 3')).toBe(false);
});

test('check valid phone number 4', () => {
    // TODO

    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

//function isEmail
test('check valid email 1', () => {
    // TODO

    expect(functions.isEmail('123')).toBe(false);
});
test('check valid email 2', () => {
    // TODO

    expect(functions.isEmail('xyz@mno.opq')).toBe(true);
});

test('check valid email 3', () => {
    // TODO

    expect(functions.isEmail('abc')).toBe(false);
});

test('check valid email 4', () => {
    // TODO

    expect(functions.isEmail('acd@def.ghi')).toBe(true);
});

//function isStrongPassword
test('check password strength 1', () => {
    // TODO

    expect(functions.isStrongPassword('123')).toBe(false);
});
test('check password strength 2', () => {
    // TODO

    expect(functions.isStrongPassword('McLovin123')).toBe(true);
});

test('check password strength 3', () => {
    // TODO

    expect(functions.isStrongPassword('abc')).toBe(false);
});

test('check password strength 4', () => {

    // TODO

    expect(functions.isStrongPassword('Fridaythe12th')).toBe(true);
});

//function isDate
test('check Date 1', () => {
    // TODO

    expect(functions.isDate('11/12/21')).toBe(false);
});
test('check Date 2', () => {
    // TODO

    expect(functions.isDate('11/12/2021')).toBe(true);
});

test('check Date 3', () => {
    // TODO

    expect(functions.isDate('123/12/1212')).toBe(false);
});

test('check Date 4', () => {

    // TODO

    expect(functions.isDate('6/6/6666')).toBe(true);
});


//function isHexColor
test('check color 1', () => {
    // TODO

    expect(functions.isHexColor('12')).toBe(false);
});
test('check color 2', () => {
    // TODO

    expect(functions.isHexColor('#D26')).toBe(true);
});

test('check color 3', () => {
    // TODO

    expect(functions.isHexColor('34*')).toBe(false);
});

test('check color 4', () => {

    // TODO

    expect(functions.isHexColor('#323c4b')).toBe(true);
});