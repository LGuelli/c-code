const { Shop } = require("./shop")
const { DungeonMaster } = require("./dungeonMaster")

function main() {
    const dm = new DungeonMaster()
    dm.generatePlayers(new Shop())
    winner = dm.sendPlayersToDungeon()

    console.log("Winner: ", winner)
    console.log(winner.getGoldSpent())
}

// Runnit
main()