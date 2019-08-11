export interface FlyBehaviorI {
  fly: () => void;
}

export class FlyWithWings implements FlyBehaviorI {
  public fly(): void {
    alert("I'm flying!!");
  }
}
