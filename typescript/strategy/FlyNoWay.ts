import {FlyBehaviorI} from './FlyWithWings';

export class FlyNoWay implements FlyBehaviorI {
  public fly(): void {
    alert("I can't fly.");
  }
}
