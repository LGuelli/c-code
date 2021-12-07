class Game {
  constructor(player, boss) {
    if (!player || !boss) {
      throw Error("we are missing fighters")
    }
    this.player = player
    this.boss = boss
  }

  getDamage(damage, armor) {
    const diff = damage - armor
    return diff <= 0 ? 1 : diff
  }

  playerTurn() {
    if(this.player.isAlive()) {
      // console.log({bossTakesDamage: this.getDamage(this.player.getDamage(), this.boss.getArmor())})
      this.boss.reduceHp(this.getDamage(this.player.getDamage(), this.boss.getArmor()))
    }
  }

  bossTurn() {
    if(this.boss.isAlive()) {
      // console.log({playerTakesDamage: this.getDamage(this.boss.getDamage(), this.player.getArmor())})
      this.player.reduceHp(this.getDamage(this.boss.getDamage(), this.player.getArmor()))
    }
  }

  isGameOver() {
      return !this.player.isAlive() || !this.boss.isAlive()
  }

  getWinner() {
    if(this.player.isAlive() && this.boss.isAlive()) {
      throw Error('Your logic failed you.')
    }
    if(this.boss.isAlive()){
      return this.boss
    }
    
    return this.player

  }

  playGame() {
      let nextTurn = 'player'
      while (!this.isGameOver()) {
        if(nextTurn === 'player'){
          nextTurn = 'boss'
          this.playerTurn()

        } else {
          nextTurn = 'player'
          this.bossTurn()
        }
      } 
      return this.getWinner()
  }
}

module.exports = { Game }
