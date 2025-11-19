const sum = require('../utils/suma');

test("sumar 1 mas 2", () => {
        expect(sum(1,2)).toBe(3);
}) 

test("sumar -1 mas -2", () => {
    expect(sum(-1,-2)).toBe(-3);
})

test ("sumar -1 mas 5", () =>{
    expect(sum(-1,5)).toBe(4);
})