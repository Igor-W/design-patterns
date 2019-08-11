import {FlyBehaviorI} from './FlyWithWings';

export class FlyRocketPowered implements FlyBehaviorI {
  public fly(): void {
    alert("I'm flying with a rocket!");
  }
}
