import { checkDraw } from '../../../src/funcUtil';

describe('checkDraw', () => {

    it('returns true when the array lenths match the squared boardSize', () => {
        const array1 = [
            { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 0, col: 2 },
            { row: 2, col: 0 },
            { row: 2, col: 1 },
        ]
        const array2 = [
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 1, col: 2 },
            { row: 2, col: 2 },
        ]
        const boardSize = 3

        expect(checkDraw(array1, array2, boardSize)).toEqual(true)
    });

    it('returns false when the array lenths do not match the squared boardSize', () => {
        const array1 = [
            { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 0, col: 2 },
            { row: 2, col: 0 },
        ]
        const array2 = [
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 1, col: 2 },
            { row: 2, col: 2 },
        ]
        const boardSize = 3

        expect(checkDraw(array1, array2, boardSize)).toEqual(false)
    });
});