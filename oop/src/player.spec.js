const { Player } = require('./player')

describe('player', () => {
    let player
    let customDagger = {cost: 9, damage: 12, name: 'custom dagger'}
    const perfectlyFineRing = {cost: 19, damage: 3, name: 'a ring'}
    describe('A player with a dagger', () => {
        beforeAll(() => {
            player = new Player(1337, customDagger)
        })

        it("spent gold", () => {
            expect(player.getGoldSpent()).toBe(9)
        })

        it("should have damage", () => {
          expect(player.getDamage()).toBe(12)
        })
    })
    describe('A player with a dagger and a ring', () => {
        beforeAll(() => {
            player = new Player(1337, customDagger)
            player.addRing(perfectlyFineRing)
        })

        it("spent gold", () => {
            expect(player.getGoldSpent()).toBe(28)
        })

        it("should have damage", () => {
          expect(player.getDamage()).toBe(15)
        })
    })
    describe('A player with two rings', () => {
        beforeAll(() => {
            player = new Player(1337, customDagger)
            player.addRing(perfectlyFineRing)
            player.addRing(perfectlyFineRing)
        })

        it("spent gold", () => {
            expect(player.getGoldSpent()).toBe(47)
        })

        it("should have damage", () => {
          expect(player.getDamage()).toBe(18)
        })

        it('should throw an error if adding a third ring', () => {
            expect(() => player.addRing(perfectlyFineRing)).toThrow(/Sorry/)
        })
    })

})