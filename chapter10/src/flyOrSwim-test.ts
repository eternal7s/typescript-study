import {Bird, Fish} from "./BirdAndFish";
import {flyOrSwim} from "./flyOrSwim";

[new Bird, new Fish].forEach(flyOrSwim);