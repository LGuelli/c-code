const { Shop, Weapon } = require('./items')

describe("items.js", () => {
    it("Should Remove Items When Buying", () => {
        const shop = new Shop()
        const dagger = shop.buy("Dagger")
        expect(dagger).toBeInstanceOf(Weapon)
    })
})