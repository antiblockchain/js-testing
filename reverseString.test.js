const reverseString = require ('./reverseString')

test('Reverses string', () => {
    expect(reverseString("hello")).toBe("olleh")
})

test ('Reverses words too', () => {
    expect(reverseString("hello world")).toBe("dlrow olleh")
})