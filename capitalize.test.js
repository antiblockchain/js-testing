const capitalize = require('./capitalize')

test('Capitalizes text', () => {
    expect(capitalize("hello")).toBe("HELLO")
})

test('Capitalizes multiple words', () => {
    expect(capitalize("hello world")).toBe("HELLO WORLD")
})