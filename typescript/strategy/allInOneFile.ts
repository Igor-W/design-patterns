interface FlyBehaviorI {
  fly: () => void;
}

class FlyWithWings implements FlyBehaviorI {
  public fly(): void {
    alert("I'm flying!!");
  }
}

interface QuackBehaviorI {
  quack: () => void;
}

class Quack implements QuackBehaviorI {
  public quack(): void {
    alert("Quack");
  }
}

class MuteQuack implements QuackBehaviorI {
  public quack(): void {
    alert("<< Silence >>");
  }
}

class FlyNoWay implements FlyBehaviorI {
  public fly(): void {
    alert("I can't fly.");
  }
}

class FlyRocketPowered implements FlyBehaviorI {
  public fly(): void {
    alert("I'm flying with a rocket!");
  }
}

interface DuckI {
  flyBehavior: FlyBehaviorI;
  quackBehavior: QuackBehaviorI;

  swim: () => void;
  display: () => void;
  performFly: () => void;
  performQuack: () => void;
  setFlyBehavior: (fb: FlyBehaviorI) => void;
  setFlyBehavior: (qb: QuackBehaviorI) => void;
}

abstract class Duck implements DuckI {
  abstract flyBehavior: FlyBehaviorI;
  abstract quackBehavior: QuackBehaviorI;

  public swim(): void {
    alert('Duck swim!');
  }

  abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public setFlyBehavior(fb: FlyBehaviorI): void {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehaviorI): void {
    this.quackBehavior = qb;
  }
}

class ModelDuck extends Duck {
  // first way to define instance props
  flyBehavior: FlyBehaviorI = new FlyNoWay();
  quackBehavior: QuackBehaviorI = new MuteQuack();

  constructor() {
    super();

    // or second way to define instance props
    // this.flyBehavior = new FlyNoWay();
    // this.quackBehavior = new MuteQuack();
  }

  public display(): void {
    alert("I'm a model duck");
  }
}

class MallardDuck extends Duck {
  // first way to define instance props
  flyBehavior: FlyBehaviorI = new FlyWithWings();
  quackBehavior: QuackBehaviorI = new Quack();

  constructor() {
    super();

    // or second way to define instance props
    // this.quackBehavior = new Quack();
    // this.flyBehavior = new FlyNoWay();
  }

  public display(): void {
    alert("I'm a real Mallard duck");
  }
}

const mallard: Duck = new MallardDuck();
mallard.performQuack(); // Quack
mallard.performFly(); // I'm flying!!

const model: Duck = new ModelDuck();
model.performFly(); // I can't fly
model.setFlyBehavior(new FlyRocketPowered());
model.performFly(); // I'm flying with a rocket
