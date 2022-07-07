import Race from './Race';

class Orc extends Race {
  private static instances = 0;
  maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.createNewInstance();
  }

  private static createNewInstance() {
    this.instances += 1;
  }

  static createdRacesInstances() {
    return this.instances;
  }
}

export default Orc;