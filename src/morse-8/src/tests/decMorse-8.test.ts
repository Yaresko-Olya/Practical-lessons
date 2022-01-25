import {decodeMorse} from '../decMorse-8'

describe('tests for decodeMorse', () => {
    test('Should return result HEY JUDE', () => {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe("HEY JUDE")
    })

    test('Should return result SOS(special code)', () => {
        expect(decodeMorse('...---...')).toBe("SOS")
    })

    test('Should return result SOS without spaces(special code)', () => {
        expect(decodeMorse('   ...---...   ')).toBe("SOS")
    })
})