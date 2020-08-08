const sum = require('./index')

test('adds of 1 and 2 is 3', () => {
    expect(sum(1,2)).toBe(3)
});

test('fake test',()=>{
    expect(true).toBeTruthy
})