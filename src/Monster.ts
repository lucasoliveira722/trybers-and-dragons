import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 65;
  }
  
  get lifePoints() {
    return this._lifePoints;
  }
  
  get strength() {
    return this._strength;
  }

  attack(enemy: SimpleFighter): number {
    let { lifePoints } = enemy;
    lifePoints -= this.strength;
    return lifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = (attackPoints - this.lifePoints);
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this.lifePoints;
  }
}