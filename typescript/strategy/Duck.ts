import {QuackBehaviorI} from './Quack';
import {FlyBehaviorI} from './FlyWithWings';

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

export abstract class Duck implements DuckI {
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
