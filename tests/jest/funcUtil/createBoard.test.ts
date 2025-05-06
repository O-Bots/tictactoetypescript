import { createBoard } from '../../../src/funcUtil';

describe('createBoard', () => {
    beforeEach(() => {
        // Set up a fresh board element before each test
        document.body.innerHTML = '<div id="board"></div>';
    });

    it('creates the correct number of cells and sets attributes', () => {
        const boardSize = 3;
        createBoard(boardSize);

        const grid = document.getElementById('board');
        expect(grid).not.toBeNull();

        // Check the CSS variable for board size
        expect(grid!.style.getPropertyValue('--board-size')).toBe(String(boardSize));

        // Check the number of cells
        const cells = grid!.querySelectorAll('.cell');
        expect(cells.length).toBe(boardSize * boardSize);

        // Check attributes and styles of the first cell
        const firstCell = cells[0] as HTMLElement;
        expect(firstCell.getAttribute('data-cell')).toBe('0,0');
        expect(firstCell.style.getPropertyValue('--cell-colour')).toBe('rgb(255, 255, 255)');

        // Check attributes and styles of the last cell
        const lastCell = cells[(boardSize * boardSize)-1] as HTMLElement;
        expect(lastCell.getAttribute('data-cell')).toBe(`${boardSize-1},${boardSize-1}`);
        expect(lastCell.style.getPropertyValue('--cell-colour')).toBe('rgb(255, 255, 255)');
    });

    it('does nothing if #board is not present', () => {
        document.body.innerHTML = '';
        expect(() => createBoard(3)).not.toThrow();
    });

    it('throws an error if the boardSize supplied is not an integer or greater than 2', () => {
        expect(() => createBoard(0)).toThrow("Board size must be an integer greater than or equal to 2.");
        expect(() => createBoard(1.5)).toThrow("Board size must be an integer greater than or equal to 2.");
    });
});