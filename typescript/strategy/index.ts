/**
 * Main idea is we are not implements fly method inside Duck class. We create single class for each type of flying
 * and then create different types of ducks and puted instance of flying type into property of duck type.
 *
 * Основная идея заключается в том, что мы не реализуем метод fly внутри класса Duck. Мы создаем отдельный класс
 * для каждого типа полета, а затем создаем различные типы уток и помещаем экземпляр типа полета в свойство типа утки.
 * */

import {Duck} from './Duck';
import {MallardDuck} from './MallardDuck';
import {ModelDuck} from './ModelDuck';
import {FlyRocketPowered} from './FlyRocketPowered';

const mallard: Duck = new MallardDuck();
mallard.performQuack(); // Quack
mallard.performFly(); // I'm flying!!

const model: Duck = new ModelDuck();
model.performFly(); // I can't fly
model.setFlyBehavior(new FlyRocketPowered());
model.performFly(); // I'm flying with a rocket
