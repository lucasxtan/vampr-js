const { assert } = require('chai');

class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = []; //subordinates
    this.creator = null; //boss
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    //add subordinate
    //ada.addsubordinate(craig)
    this.offspring.push(vampire);
    vampire.creator = this

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    let numberOfOffspring = 0;
    if (this.offspring.length > 0) {
      numberOfOffspring = this.offspring.length;
    }
    return numberOfOffspring;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let vampiresFromOriginal = 0
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      vampiresFromOriginal++
    }
    return vampiresFromOriginal;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    //numberofpeopletoCEO
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

