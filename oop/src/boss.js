class Boss {
    constructor(hitpoints, damage, armor) {
        this.hitpoints = hitpoints
        this.damage = damage
        this.armor = armor
    }

    getArmor() { 
        return this.armor;
    }

    getDamage() {
        return this.damage
    }

    isAlive() {
        return this.hitpoints > 0
    }

    reduceHp(amount) {
      this.hitpoints -= amount
    }
}

module.exports = { Boss }
