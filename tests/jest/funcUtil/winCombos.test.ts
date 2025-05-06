import { winCombos } from '../../../src/funcUtil';

describe('winCombos', () => {
    function setupBoard(boardSize: number) {
        document.body.innerHTML = '<div id="board"></div>';
        const board = document.getElementById('board')!;
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.setAttribute('data-cell', `${i},${j}`);
                board.appendChild(cell);
            };
        };
    };

    it('returns correct combos and cells for a 3x3 board', () => {
        setupBoard(3);
        const { combos, cells } = winCombos(3);

        // 3 rows, 3 columns, 2 diagonals = 8 combos
        expect(combos.length).toBe(8);

        // First row
        expect(combos[0]).toEqual([
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 }
        ]);
        // First column
        expect(combos[3]).toEqual([
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 2, col: 0 }
        ]);
        // Main diagonal
        expect(combos[6]).toEqual([
        { row: 0, col: 0 },
        { row: 1, col: 1 },
        { row: 2, col: 2 }
        ]);
        // Anti-diagonal
        expect(combos[7]).toEqual([
        { row: 0, col: 2 },
        { row: 1, col: 1 },
        { row: 2, col: 0 }
        ]);
        // All cells present
        expect(cells.length).toBe(9);
    });

    it('returns correct combos and cells for a 4x4 board', () => {
        setupBoard(4);
        const { combos, cells } = winCombos(4);

        // 4 rows, 4 columns, 2 diagonals = 10 combos
        expect(combos.length).toBe(10);

        // First row
        expect(combos[0]).toEqual([
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 0, col: 3 }
        ]);
        // First column
        expect(combos[4]).toEqual([
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 2, col: 0 },
        { row: 3, col: 0 }
        ]);
        // Main diagonal
        expect(combos[8]).toEqual([
        { row: 0, col: 0 },
        { row: 1, col: 1 },
        { row: 2, col: 2 },
        { row: 3, col: 3 }
        ]);
        // Anti-diagonal
        expect(combos[9]).toEqual([
        { row: 0, col: 3 },
        { row: 1, col: 2 },
        { row: 2, col: 1 },
        { row: 3, col: 0 }
        ]);
        // All cells present
        expect(cells.length).toBe(16);
    });
});