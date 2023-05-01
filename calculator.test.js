const calculator = require ('./calculator')

test('Adds numbers', () => {
    expect(calculator(1, 2, "+")).toBe(3);
})
test('Divides', () => {
    expect(calculator(10, 2, "/")).toBe(5);
})
test('Handles errors', () => {
    expect(calculator(5, 3, "b")).toBe("Exception! Use a specified operator.")
})