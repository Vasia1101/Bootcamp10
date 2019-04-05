const functions = require('./functions')

// sum
test ('adds 2 +2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4)
});
test ('adds 2 +2 to equal 4', () => {
    expect(functions.add(2,2)).not.toBe(5)
});

// Null
test('Must be null',()=>{
    expect(functions.isNull()).toBeNull();
});

// true
test('must be falsy', ()=>{
    expect(functions.checkFalsy(undefined)).toBeFalsy();
});

// user
test('check user name and last name', ()=> {
    expect(functions.createUser()).toEqual({
        firstName:"Tanos",
        lastName:"Toti"

    });
})