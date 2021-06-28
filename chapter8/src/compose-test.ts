import {f, g, h} from './f-g-h';
import {compose} from "./compose";

const composeFGH = compose(h, g, f);
console.log(composeFGH('x'));