class Player {
    constructor(hitpoints) {
        this.hitpoints = hitpoints
        this.rings = []
    }
    addWeapon(weapon) {
        this.weapon = weapon
    }

    addArmor(armor) {
        this.armor = armor
    }

    addRing(ring) {
        this.rings.shift(ring)
    }
}