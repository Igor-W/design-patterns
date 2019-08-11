export interface QuackBehaviorI {
  quack: () => void;
}

export class Quack implements QuackBehaviorI {
  public quack(): void {
    alert("Quack");
  }
}
