// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
test('check (860)316-6335 is phone number', () => {
    expect(functions.isPhoneNumber('(860)316-6335')).toBe(true);
  });
test('check (157)192-1438 is phone number', () => {
expect(functions.isPhoneNumber('(157)192-1438')).toBe(true);
});
test('check nnd is not phone number', () => {
expect(functions.isPhoneNumber('nnd')).toBe(false);
});
test('check cancannew is not phone number', () => {
expect(functions.isPhoneNumber('cancannew')).toBe(false);
});
//
test('check haw057@ucsd.edu is email', () => {
    expect(functions.isEmail('haw057@ucsd.edu')).toBe(true);
  });
test('check yfcui@sdsc.edu is email', () => {
expect(functions.isEmail('yfcui@sdsc.edu')).toBe(true);
});
test('check nnd is not email', () => {
expect(functions.isEmail('nnd')).toBe(false);
});
test('check cancannew is not email', () => {
expect(functions.isEmail('cancannew')).toBe(false);
});

test('check #000000 is hex color', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
  });
test('check #ffffff is hex color', () => {
expect(functions.isHexColor('#ffffff')).toBe(true);
});
test('check nnd is not hex color', () => {
expect(functions.isHexColor('nnd')).toBe(false);
});
test('check cancannew is not hex color', () => {
expect(functions.isHexColor('cancannew')).toBe(false);
});

test('check 56/78/2022 is date', () => {
    expect(functions.isDate('56/78/2022')).toBe(true);
  });
test('check 99/99/9999 is date', () => {
expect(functions.isDate('99/99/9999')).toBe(true);
});
test('check nnd is not date', () => {
expect(functions.isDate('nnd')).toBe(false);
});
test('check cancannew is not date', () => {
expect(functions.isDate('cancannew')).toBe(false);
});

test('check AXooA34556 is strong password', () => {
    expect(functions.isStrongPassword('AXooA34556')).toBe(true);
  });
test('check Brdhtrd56 is strong password', () => {
expect(functions.isStrongPassword('Brdhtrd56')).toBe(true);
});
test('check 1 is not strong password', () => {
expect(functions.isStrongPassword('1')).toBe(false);
});
test('check 2 is not strong password', () => {
expect(functions.isStrongPassword('2')).toBe(false);
});
// TODO - Part 2