import Race from './Race';

class Halfling extends Race {
  private static instances = 0;
  maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.createNewInstance();
  }

  private static createNewInstance() {
    this.instances += 1;
  }

  static createdRacesInstances() {
    return this.instances;
  }
}

export default Halfling;