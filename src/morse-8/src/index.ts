import {decodeMorse} from "./decMorse-8"
import {encodeMorse} from "./encMorse-8"
import {mappings} from "./mapping";

const morse = encodeMorse( '  SOS')

console.log(morse);
console.log(decodeMorse(morse))