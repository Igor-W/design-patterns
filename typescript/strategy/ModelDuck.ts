import {Duck} from './Duck';
import {QuackBehaviorI} from './Quack';
import {FlyBehaviorI} from './FlyWithWings';
import {FlyNoWay} from './FlyNoWay';
import {MuteQuack} from './MuteQuack';

export class ModelDuck extends Duck {
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
