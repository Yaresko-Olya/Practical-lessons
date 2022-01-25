import {encodeMorse} from '../encMorse-8'

describe('tests for encodeMorse', () => {
    test('Should return result HEY JUDE', () => {
        expect(encodeMorse('HEY JUDE')).toBe(".... . -.--   .--- ..- -.. .")
    })

    test('Should return result HEY JUDE(lowerCase)', () => {
        expect(encodeMorse('hey jude')).toBe(".... . -.--   .--- ..- -.. .")
    })

    test('Should return result SOS without spaces(special code)', () => {
        expect(encodeMorse(' SOS ')).toBe("...---...")
    })

    test('Should return result SOS(special code)', () => {
        expect(encodeMorse('SOS')).toBe("...---...")
    })
})