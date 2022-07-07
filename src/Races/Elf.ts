import Race from './Race';

class Elf extends Race {
  private static instances = 0;
  maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    // this.maxLifePoints = 99;
    Elf.createNewInstance();
  }

  private static createNewInstance() {
    this.instances += 1;
  }

  static createdRacesInstances() {
    return this.instances;
  }
}

export default Elf;