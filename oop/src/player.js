class Player {
    constructor(hitpoints, weapon) {
        this.hitpoints = hitpoints
        this.rings = []
        this.weapon = weapon
    }

    getGoldSpent() {
       return this.weapon.cost +
         this.rings.reduce((acc, r) => acc + (r?.cost || 0), 0) +
         (this.armor?.cost ?? 0)
    }
    
    addWeapon(weapon) {
        this.weapon = weapon
    }

    addArmor(armor) {
        this.armor = armor
    }

    addRing(ring) {
        if (this.rings.length == 2) {
            throw Error("Sorry, I only have two hands.")
        }
        this.rings.push(ring)
    }

    getArmor() { 
        return this.armor?.armor ?? 0
    }

    getDamage() {
        return this.weapon.damage + this.rings.reduce((acc, r) => acc + (r?.damage || 0), 0)
    }

    isAlive() {
        return this.hitpoints > 0
    }

    reduceHp(amount) {
        this.hitpoints -= amount
    }
}

module.exports = { Player }
