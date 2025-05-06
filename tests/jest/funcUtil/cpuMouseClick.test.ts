import { cpuMouseClick } from "./../../../src/funcUtil"

describe('cpuMouseClick', () => {
    beforeEach(() => {
        // Set up a mock DOM with a board and cells
        document.body.innerHTML = `
            <div id="board">
                <div class="cell" data-cell="0,0"></div>
                <div class="cell" data-cell="0,1"></div>
                <div class="cell" data-cell="1,0"></div>
                <div class="cell" data-cell="1,1"></div>
            </div>
        `;
    });

    it("dispatches a click event on the correct cell", () => {
        const targetCell = document.querySelector('.cell[data-cell="1,0"]') as HTMLElement;
        const clickHandler = jest.fn();
        targetCell.addEventListener("click", clickHandler);

        cpuMouseClick([1, 0]);

        expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it("does nothing if the cell does not exist", () => {
        // No cell with data-cell="2,2"
        expect(() => cpuMouseClick([2, 2])).not.toThrow();
    });
});