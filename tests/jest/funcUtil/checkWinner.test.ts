import { checkWinner } from '../../../src/funcUtil';

describe('checkWinner', () => {
    describe('checkWinner 3x3', () => {
        const combos3x3 = [
        // Rows
        [ { row:0, col:0 }, { row:0, col:1 }, { row:0, col:2 } ],
        [ { row:1, col:0 }, { row:1, col:1 }, { row:1, col:2 } ],
        [ { row:2, col:0 }, { row:2, col:1 }, { row:2, col:2 } ],
        // Columns
        [ { row:0, col:0 }, { row:1, col:0 }, { row:2, col:0 } ],
        [ { row:0, col:1 }, { row:1, col:1 }, { row:2, col:1 } ],
        [ { row:0, col:2 }, { row:1, col:2 }, { row:2, col:2 } ],
        // Diagonals
        [ { row:0, col:0 }, { row:1, col:1 }, { row:2, col:2 } ],
        [ { row:0, col:2 }, { row:1, col:1 }, { row:2, col:0 } ],
        ];
    
        it('returns true for a winning row', () => {
        const moves = [ { row:0, col:0 }, { row:0, col:1 }, { row:0, col:2 } ];
        expect(checkWinner(moves, combos3x3, 3)).toBe(true);
        });
    
        it('returns true for a winning column', () => {
        const moves = [ { row:0, col:1 }, { row:1, col:1 }, { row:2, col:1 } ];
        expect(checkWinner(moves, combos3x3, 3)).toBe(true);
        });
    
        it('returns true for a winning diagonal', () => {
        const moves = [ { row:0, col:0 }, { row:1, col:1 }, { row:2, col:2 } ];
        expect(checkWinner(moves, combos3x3, 3)).toBe(true);
        });
    
        it('returns false if there is no winning combination', () => {
        const moves = [ { row:0, col:0 }, { row:1, col:1 }, { row:2, col:1 } ];
        expect(checkWinner(moves, combos3x3, 3)).toBe(false);
        });
    
        it('returns false if not enough moves to win', () => {
        const moves = [ { row:0, col:0 }, { row:0, col:1 } ];
        expect(checkWinner(moves, combos3x3, 3)).toBe(false);
        });
    });

    describe('checkWinner 4x4', () => {
        const combos4x4 = [
            // Rows
            [ { row:0, col:0 }, { row:0, col:1 }, { row:0, col:2 }, { row:0, col:3 } ],
            [ { row:1, col:0 }, { row:1, col:1 }, { row:1, col:2 }, { row:1, col:3 } ],
            [ { row:2, col:0 }, { row:2, col:1 }, { row:2, col:2 }, { row:2, col:3 } ],
            [ { row:3, col:0 }, { row:3, col:1 }, { row:3, col:2 }, { row:3, col:3 } ],
            // Columns
            [ { row:0, col:0 }, { row:1, col:0 }, { row:2, col:0 }, { row:3, col:0 } ],
            [ { row:0, col:1 }, { row:1, col:1 }, { row:2, col:1 }, { row:3, col:1 } ],
            [ { row:0, col:2 }, { row:1, col:2 }, { row:2, col:2 }, { row:3, col:2 } ],
            [ { row:0, col:3 }, { row:1, col:3 }, { row:2, col:3 }, { row:3, col:3 } ],
            // Diagonals
            [ { row:0, col:0 }, { row:1, col:1 }, { row:2, col:2 }, { row:3, col:3 } ],
            [ { row:0, col:3 }, { row:1, col:2 }, { row:2, col:1 }, { row:3, col:0 } ],
        ];
    
        it('returns true for a winning row', () => {
            const moves = [ { row:2, col:0 }, { row:2, col:1 }, { row:2, col:2 }, { row:2, col:3 } ];
            expect(checkWinner(moves, combos4x4, 4)).toBe(true);
        });
    
        it('returns true for a winning column', () => {
            const moves = [ { row:0, col:1 }, { row:1, col:1 }, { row:2, col:1 }, { row:3, col:1 } ];
            expect(checkWinner(moves, combos4x4, 4)).toBe(true);
        });
    
        it('returns true for a winning main diagonal', () => {
            const moves = [ { row:0, col:0 }, { row:1, col:1 }, { row:2, col:2 }, { row:3, col:3 } ];
            expect(checkWinner(moves, combos4x4, 4)).toBe(true);
        });
    
        it('returns true for a winning anti-diagonal', () => {
            const moves = [ { row:0, col:3 }, { row:1, col:2 }, { row:2, col:1 }, { row:3, col:0 } ];
            expect(checkWinner(moves, combos4x4, 4)).toBe(true);
        });
    
        it('returns false if there is no winning combination', () => {
            const moves = [ { row:0, col:0 }, { row:1, col:1 }, { row:2, col:2 }, { row:3, col:0 } ];
            expect(checkWinner(moves, combos4x4, 4)).toBe(false);
        });
    
        it('returns false if not enough moves to win', () => {
            const moves = [ { row:0, col:0 }, { row:0, col:1 }, { row:0, col:2 } ];
            expect(checkWinner(moves, combos4x4, 4)).toBe(false);
        });
    });

});