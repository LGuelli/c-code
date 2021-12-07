const { items, Weapon, Armor, RingArmor, RingDamage } = require('./items')

class Shop {
  constructor() {
    this.inventory = Object.values(items)
  }

  getAvailableWeapons() { 
      return this.inventory.filter(item => item.constructor === Weapon)
  }

  getAvailableArmor() { 
    return this.inventory.filter(item => item.constructor === Armor)
  }

  getAvailableRingArmor() { 
    return this.inventory.filter(item => item.constructor === RingArmor)
  }

  getAvailableRingDamage() { 
    return this.inventory.filter(item => item.constructor === RingDamage)
  }
}


module.exports = { Shop }
