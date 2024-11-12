import { intervalToObj } from "../src/interval.js";

describe('Interval', () => {

    it('should return an object for 0 second', () => {
        const o = intervalToObj(0)
        expect(o).toEqual({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        })
    })

    it('should return an object for 3 second', () => {
        const o = intervalToObj(3 * 1000)
        expect(o).toEqual({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 3
        })
    })

    it('should return an object for 15 second', () => {
        const o = intervalToObj(15 * 1000)
        expect(o).toEqual({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 15
        })
    })

    it('should handle 1 minutes', () => {
        const o = intervalToObj(1 * 60 * 1000)
        expect(o).toEqual({
            days: 0,
            hours: 0,
            minutes: 1,
            seconds: 0
        })
    })

    it('should handle minutes', () => {
        const o = intervalToObj(3 * 60 * 1000 + 15 * 1025)
        expect(o).toEqual({
            days: 0,
            hours: 0,
            minutes: 3,
            seconds: 15
        })
    })

    it('should handle hours', () => {
        const o = intervalToObj(3 * 60 * 60 * 1000 + 3 * 60 * 1000 + 15 * 1025)
        expect(o).toEqual({
            days: 0,
            hours: 3,
            minutes: 3,
            seconds: 15
        })
    })

    it('should handle days', () => {
        const o = intervalToObj(15 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 3 * 60 * 1000 + 15 * 1025)
        expect(o).toEqual({
            days: 15,
            hours: 3,
            minutes: 3,
            seconds: 15
        })
    })

    it('should handle negative numbers', () => {
        const o = intervalToObj(-15 * 24 * 60 * 60 * 1000 + -3 * 60 * 60 * 1000 + -3 * 60 * 1000 + -15 * 1025)
        expect(o).toEqual({
            days: 15,
            hours: 3,
            minutes: 3,
            seconds: 15
        })
    })
});