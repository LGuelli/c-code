const { items } = require('./items')
const { Game } = require('./game')
const { Player } = require('./player')
const { Boss } = require('./boss')

// You must buy exactly one weapon; no dual-wielding. Armor is optional, but you can't use more than one. You can buy 0-2 rings (at most one for each hand). You must use any items you buy. The shop only has one of each item, so you can't buy, for example, two rings of Damage +3.

// For example, suppose you have 8 hit points, 5 damage, and 5 armor, and that the boss has 12 hit points, 7 damage, and 2 armor:

// The player deals 5-2 = 3 damage; the boss goes down to 9 hit points.
// The boss deals 7-5 = 2 damage; the player goes down to 6 hit points.
// The player deals 5-2 = 3 damage; the boss goes down to 6 hit points.
// The boss deals 7-5 = 2 damage; the player goes down to 4 hit points.
// The player deals 5-2 = 3 damage; the boss goes down to 3 hit points.
// The boss deals 7-5 = 2 damage; the player goes down to 2 hit points.
// The player deals 5-2 = 3 damage; the boss goes down to 0 hit points.
describe("Test example", () => {
    it("Player should win", () => {
        const player = new Player(8, items.shortsword)
        player.addArmor(items.chainmail)
        player.addRing(items.ringArmor3)

        const boss = new Boss(12, 7, 2)

        const game = new Game(player, boss)
        const winner = game.playGame()

        expect(winner).toBe(player)
    })

    it("Boss should win", () => {
        const player = new Player(12, items.dagger)

        const boss = new Boss(18, 12, 2)

        const game = new Game(player, boss)
        const winner = game.playGame()

        expect(boss.isAlive()).toBe(true);
        expect(player.isAlive()).toBe(false);
        expect(winner).toBe(boss)
    })
})