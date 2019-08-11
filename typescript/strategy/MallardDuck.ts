import {FlyBehaviorI, FlyWithWings} from './FlyWithWings';
import {Quack, QuackBehaviorI} from './Quack';
import {Duck} from './Duck';

export class MallardDuck extends Duck {
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
