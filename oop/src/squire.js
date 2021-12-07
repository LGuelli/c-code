class Squire {
    equipmentSets(shop) {
        // restrictions:
        // * always one weapon
        // * zero or  one armour
        // * zero, one or two rings
        // sort the sets by cost, cheapest first

        const weapons = shop.getAvailableWeapons()
        const armor = shop.getAvailableArmor()
        const ringDamage = shop.getAvailableRingDamage()
        const ringArmor = shop.getAvailableRingArmor()

        const equipmentSets = []
        for(let wpn of weapons) {
            equipmentSets.push({weapon: wpn})
            for(let arm of armor) {
                equipmentSets.push({weapon: wpn, armor: arm})
                for(let ring1 of [...ringDamage, ...ringArmor]) {
                    equipmentSets.push({weapon: wpn, armor: arm, rings:[ring1]})
                    for(let ring2 of [...ringDamage, ...ringArmor]) {
                        if(ring1 !== ring2) {
                            equipmentSets.push({weapon: wpn, armor: arm, rings:[ring1, ring2]})
                        }
                    }
                }
            }

            for(let ring1 of [...ringDamage, ...ringArmor]) {
                equipmentSets.push({weapon: wpn, rings:[ring1]})
                for(let ring2 of [...ringDamage, ...ringArmor]) {
                    if(ring1 !== ring2) {
                        equipmentSets.push({weapon: wpn, rings:[ring1, ring2]})
                    }
                }
            }
       }

       return equipmentSets;
    }
}

module.exports = { Squire }
