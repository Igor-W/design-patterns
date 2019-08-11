import {QuackBehaviorI} from './Quack';

export class MuteQuack implements QuackBehaviorI {
  public quack(): void {
    alert("<< Silence >>");
  }
}
