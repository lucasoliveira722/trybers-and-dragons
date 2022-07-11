import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  race: Race;
  archetype: Archetype;
  maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this.race = new Elf(name, this._dexterity);
    this.archetype = new Mage(name);
    this.maxLifePoints = (this.race.maxLifePoints) / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get energy() {
    return this._energy;
  }

  special(enemy: Fighter | SimpleFighter) {
    console.log('HADOUKEN!');
    let { lifePoints } = enemy;
    lifePoints -= (this.strength * 2);
    console.log(lifePoints);
  }

  attack(enemy: Fighter | SimpleFighter): number {
    let { lifePoints } = enemy;
    lifePoints -= this.strength;
    return lifePoints;
  }
  
  levelUp(): void {
    this.maxLifePoints += getRandomInt(1, 10);
    if (this.maxLifePoints >= this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this.maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const damage = (attackPoints - this.defense);
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this.lifePoints;
  }
}
