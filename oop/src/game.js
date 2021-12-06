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
      this.player.reduceHp(this.getDamage(this.boss.getDamage(), this.player.getArmor()))
    }
  }

  bossTurn() {
    if(this.boss.isAlive()) {
      this.boss.reduceHp(this.getDamage(this.player.getDamage(), this.boss.getArmor()))
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
      let nextTurn = this.playerTurn.bind(this)
      while (!this.isGameOver()) {
        nextTurn()
        nextTurn = nextTurn === this.playerTurn 
          ? this.playerTurn.bind(this)
          : this.bossTurn.bind(this)
      } 
      return this.getWinner()
  }
}

module.exports = { Game }
