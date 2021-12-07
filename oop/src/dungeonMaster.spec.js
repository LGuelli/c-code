const {DungeonMaster} = require('./dungeonMaster')
const {Shop} = require('./shop')

describe("Player 1 makes sense", () => {
    it("got stuff", () => {
        const dm = new DungeonMaster()
        const shop = new Shop()
        dm.generatePlayers(shop)

        const expectedPlayer = {
               "armor": undefined,
               "hitpoints": 100,
               "rings":  [],
               "weapon": {
                 "cost": 8,
                 "damage": 4,
                 "name": "Dagger",
               },
             } 
        
        expect(dm.players[0]).toEqual(expectedPlayer)
    })
})