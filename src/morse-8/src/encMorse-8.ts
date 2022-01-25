import {mappings} from "./mapping"

export function encodeMorse(string:string):string {
    string = string.trim();
    let result = '';
    if('SOS' === string) {
        mappings.forEach(el => el.translation === "SOS" ? result = el.symbol : '');
        return  result;
    }

    const arr = string.toUpperCase().split('');
    arr.forEach(x => {
        if (x === ' ') {
            result += '  ';
        } else {
            mappings.forEach(el => {
                if (el.translation === x) {
                    result += el.symbol + " ";
                }
            })
        }
    })

    return result.trim();
}