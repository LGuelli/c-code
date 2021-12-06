const { Shop, Weapon } = require('./items')

describe("items.js", () => {
    it("should be possible to buy a dagger", () => {
        const shop = new Shop()
        const dagger = shop.buy("Dagger")

        expect(dagger).toBeInstanceOf(Weapon)
        expect(dagger.name).toBe('Dagger')
    })

    it("should remove items when buying", () => {
        const shop = new Shop()
        const dagger = shop.buy("Dagger")

        expect(shop.inventory).not.toContain(dagger)
    })

    it("should not be able to buy same dagger twice", () => {
        const shop = new Shop()
        shop.buy("Dagger")

        const maybeDagger = shop.buy("Dagger")

        expect(maybeDagger).toBe(undefined)
    })
})