import {Bird, Fish} from './BirdAndFish';

export const flyOrSwim = (o: Bird | Fish): void => {
    //o.fly()???
    if(o instanceof Bird) {
        o.fly();
        // (o as Bird).fly() // 혹은 (<Bird>o).fly
    } else if (o instanceof Fish) {
        o.swim();
        // (<Fish>o).swim() // 혹은 (o as Fish).swim()
    }
};