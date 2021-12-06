class Item {
  constructor(cost, name) {
    this.cost = cost
    this.name = name
  }
}

class Weapon extends Item {
  constructor(cost, damage, name) {
    super(cost, name)
    this.damage = damage
  }
}



class Armor extends Item {
  constructor(cost, armor, name) {
    super(cost, name)
    this.armor = armor
  }
}
// Armor:      Cost  Damage  Armor
// Leather      13     0       1
// Chainmail    31     0       2
// Splintmail   53     0       3
// Bandedmail   75     0       4
// Platemail   102     0       5

class RingDamage extends Weapon {}
// Rings:      Cost  Damage  Armor
// Damage +1    25     1       0
// Damage +2    50     2       0
// Damage +3   100     3       0

const RingDamage1 = new RingDamage(25, 1, 'RingDamage1')

class RingArmor extends Armor {}
// Defense +1   20     0       1
// Defense +2   40     0       2
// Defense +3   80     0       3

class Shop {
  constructor() {
    this.rings = [
      new RingDamage(25, 1, 'RingDamage1'),
      new RingDamage(50, 2, 'RingDamage2'),
      new RingDamage(100, 3, 'RingDamage3'),
      new RingArmor(20, 1, 'RingArmor1'),
      new RingArmor(40, 2, 'RingArmor2'),
      new RingArmor(80, 3, 'RingArmor3'),
    ]
    this.weapons = [
        new Weapon(8, 4, 'Dagger'),
        new Weapon(10, 5, 'Shortsword'),
        new Weapon(25, 6, 'Warhammer'),
        new Weapon(40, 7, 'Longsword'),
        new Weapon(74, 8, 'Greataxe'),
    ]
    this.armor = [
        new Armor(13, 1, 'Leather'),
        new Armor(31, 2, 'Chainmail'),
        new Armor(53, 3, 'Splintmail'),
        new Armor(75, 4, 'Bandedmail'),
        new Armor(102, 5, 'Platemail'),
    ]

    this.inventory = [...this.rings, ...this.weapons, ...this.armor]
  }
  
  buy(name) {
    const itemIndex = this.inventory.findIndex(item => name === item.name)

    if (itemIndex >= 0) return this.inventory.splice(itemIndex, 1)[0]
  }
}

module.exports = { Shop, Weapon }

