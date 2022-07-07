import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static instances = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.createNewArchetypeInstance();
  }

  private static createNewArchetypeInstance() {
    this.instances += 1;
  }

  static createdArchetypeInstances() {
    return this.instances;
  }
}

export default Necromancer;