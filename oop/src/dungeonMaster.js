const { Game } = require("./game")
const { Squire } = require("./squire")
const { Player } = require("./player")
const { Boss } = require("./boss")

class DungeonMaster {
  constructor() {
    this.players = []
  }

  generatePlayers(shop) {
      this.players = new Squire().equipmentSets(shop).map(set => {
        const player = new Player(100, set.weapon)
        player.addRing(set.rings?.[0])
        player.addRing(set.rings?.[1])

        player.addArmor(set.armor)
        return player;
    }).sort((a, b) => a.getGoldSpent() - b.getGoldSpent())
  }
 
  sendPlayersToDungeon() {
      let winner
      for(const player of this.players) {
          const boss = new Boss(100, 8, 2)
          const game = new Game(player, boss)
          winner = game.playGame()

          if (winner === player) {
            return winner;
          }
      }

      return winner
  }
}

module.exports = {
    DungeonMaster
}