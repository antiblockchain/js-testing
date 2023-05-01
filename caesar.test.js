const caesar = require('./caesar')

test('tests cipher lowercase', () => {
    expect(caesar("this is a test", 8)).toBe("bpqa qa i bmab")
})

test('Tests lowercase, uppercase, and punctuation', () => {
    expect(caesar("Wow, what a test! How profound...", 6)).toBe("Cuc, cngz g zkyz! Nuc vxuluatj...")
})
