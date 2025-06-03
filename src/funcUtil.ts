import { CellPositionArray, CellPosition } from "./index";

type DatacellValue = [number,number];

const cellPositions: CellPositionArray = [];

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createBoard(boardSize:number) {
    /*
    *To-do: move error to board size checking func when implimented
    */
    if (!Number.isInteger(boardSize) || boardSize < 2){
        throw new Error("Board size must be an integer greater than or equal to 2.");
    }
    const grid = document.getElementById('board');
    if (grid) {
        grid.style.setProperty('--board-size', String(boardSize));
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.style.setProperty('--cell-colour', 'rgb(255, 255, 255)')
                cell.setAttribute('data-cell', `${i},${j}`);
                grid.appendChild(cell);
            };
        };
    };
};

const winCombos = (boardSize: number): { combos: Array<CellPositionArray>, cells: NodeListOf<Element> }=> {

    const cellPositions: CellPositionArray = [];
    const rows: Array<CellPositionArray> = [];
    const columns: Array<CellPositionArray> = [];
    const firstDiagonal: CellPositionArray = [];
    const secondDiagonal: CellPositionArray = [];

    /*
    * Creates an array with the values of each cell element separated into [row, col] coords
    */
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const dataCell = (cell as HTMLElement).getAttribute('data-cell');
        if (dataCell) {
            const [row, col] = dataCell.split(',').map(Number);
            cellPositions.push({ row, col });
        }
    });

    /*
    * Separate the cells into sub arrays for each row
    */
    for (let i = 0; i < boardSize; i++) {
        rows.push(cellPositions.slice(i * boardSize, (i + 1) * boardSize));
    }

    /*
    * Separate the cells into sub arrays for each column
    */
    for (let j = 0; j < boardSize; j++) {
        columns.push(rows.map(row => row[j]));
    }

    /*
    * Separate the cells into sub arrays for each diagonal
    */
    for (let i = 0; i < boardSize; i++) {
        firstDiagonal.push(rows[i][i]);
        secondDiagonal.push(rows[i][boardSize - 1 - i]);
    }

    return {combos:[...rows, ...columns, firstDiagonal, secondDiagonal] , cells};
};

function checkDraw(firstArr: CellPosition[], secondArr: CellPosition[], boardSize: number) {
    if (firstArr.length + secondArr.length === boardSize * boardSize) {
        return true
    } else {
        return false
    };
};

function checkWinner(playerMoves: CellPosition[], combos: CellPositionArray[], boardSize: number): boolean {
    if (playerMoves.length < boardSize) return false;
    for (const winArry of combos) {
        if (winArry.every(winCell => playerMoves.some(move => move.row === winCell.row && move.col === winCell.col))) {
            return true;
        }
    }
    return false;
};

function blockOrWin(boardSize: number, playerMoveArr: CellPosition | CellPositionArray, opponentMoveArr: CellPosition | CellPositionArray) {
    const {combos} = winCombos(boardSize)
    if (Array.isArray(playerMoveArr) && Array.isArray(opponentMoveArr)) {
        if (playerMoveArr.length < 2) return false
        const combosLeft = combos.map(combo =>
            combo.filter(move =>
                !playerMoveArr.some(playerMove => playerMove.row === move.row && playerMove.col === move.col)
            )
        );
        for (const combo of combosLeft) {
            if (combo.length === 1) {
                const isPresent = opponentMoveArr.some(
                    opponentMove => opponentMove.row === combo[0].row && opponentMove.col === combo[0].col
                );
                if (!isPresent) {
                    return [combo[0].row, combo[0].col];
                }
            }
        }
    }
    return false;
}

async function cpuMouseClick(cpuTarget: DatacellValue) {
    const cpu = document.querySelector(`.cell[data-cell="${cpuTarget[0]},${cpuTarget[1]}"]`) as HTMLElement;
    if (!cpu) return;

    const cpuClick = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    cpu.dispatchEvent(cpuClick);
}

function getBestStart(boardSize: number): { row: number, col: number }[] {
    const mid = Math.floor(boardSize / 2);
    if (boardSize % 2 === 1) {
        // Odd-sized board: single center
        return [
            { row: mid, col: mid },
            { row: 0, col: 0 },
            { row: 0, col: boardSize - 1 },
            { row: boardSize - 1, col: 0 },
            { row: boardSize - 1, col: boardSize - 1 }
        ];
    } else {
        return [
            { row: 0, col: 0 },
            { row: 0, col: boardSize - 1 },
            { row: boardSize - 1, col: 0 },
            { row: boardSize - 1, col: boardSize - 1 }
        ];
    }
};

async function firstCpuMove(boardSize: number, moveArr: CellPosition | CellPositionArray) {
    let bestStartMoves = getBestStart(boardSize);
    const mid = Math.floor(boardSize / 2);
    
    if (Array.isArray(moveArr) && moveArr.length === 0) {
        const rngMove = Math.floor(Math.random() * bestStartMoves.length)
        const move = bestStartMoves[rngMove]
        
        return await cpuMouseClick([move.row, move.col])

    } else if (Array.isArray(moveArr) && moveArr.length === 1) {

        if (moveArr[0].col === mid && moveArr[0].row === mid) {
            bestStartMoves = bestStartMoves.filter(move => !(move.row === moveArr[0].row && move.col === moveArr[0].col));

        }else {
            return await cpuMouseClick([mid, mid])
        }
    };

    const rngMove = Math.floor(Math.random() * bestStartMoves.length)
    const move = bestStartMoves[rngMove]
    
    return await cpuMouseClick([move.row, move.col])
};

function getDirectlyConnectedCells(boardSize: number): { row: number, col: number }[] {
    const mid = Math.floor(boardSize / 2);
    const cells: { row: number, col: number }[] = [];
    for (let i = 0; i < boardSize; i++) {
        if (i !== mid) {
            cells.push({ row: mid, col: i });
            cells.push({ row: i, col: mid });
        }
    }
    return cells;
}

async function secondSetCpuMove(boardSize: number, playerMoveArr: CellPosition | CellPositionArray, opponentMoveArr: CellPosition | CellPositionArray) {
    let bestMoves = getBestStart(boardSize);
    const mid = Math.floor(boardSize / 2);
    
    if (Array.isArray(playerMoveArr) && Array.isArray(opponentMoveArr) ) {
        if ((playerMoveArr[0].col === mid && playerMoveArr[0].row === mid)) {
            bestMoves = bestMoves.filter(move => 
                ((move.row === opponentMoveArr[0].row || move.col === opponentMoveArr[0].col) && 
                !(move.row === opponentMoveArr[0].row && move.col === opponentMoveArr[0].col)));
            if (bestMoves.length === 2 && playerMoveArr.length + opponentMoveArr.length === 3) {
                bestMoves = getDirectlyConnectedCells(boardSize)
            }
        }else if (opponentMoveArr[0].col === mid && opponentMoveArr[0].row === mid) {
            bestMoves = bestMoves.filter(move => 
                ((move.row !== playerMoveArr[0].row && move.col !== playerMoveArr[0].col) && 
                !(move.row === playerMoveArr[0].row && move.col === playerMoveArr[0].col) &&
                !(move.row === opponentMoveArr[0].row && move.col === opponentMoveArr[0].col)));
        }
    }
    
    const rngMove = Math.floor(Math.random() * bestMoves.length)
    const move = bestMoves[rngMove]
    
    await cpuMouseClick([move.row, move.col])
};

async function cpuRandomMoves(firstPlayerMoves:CellPositionArray, secondPlayerMoves:CellPositionArray) {
    let unique:CellPositionArray = []
    cellPositions.forEach(cell => {
        if (!unique.some(uniq => uniq.row === cell.row && uniq.col === cell.col)) {
            unique.push(cell)
        }
        
    })
    const allMoves = [firstPlayerMoves, secondPlayerMoves].flat();
    const movesLeft = unique.filter( cell => !allMoves.some(move => move.row === cell.row && move.col === cell.col));
    const rngMove = Math.floor(Math.random() * movesLeft.length)
    const move = movesLeft[rngMove]
    
    await cpuMouseClick([move.row, move.col])
}


export {
    createBoard,
    delay,
    winCombos, 
    checkDraw, 
    checkWinner, 
    cpuMouseClick, 
    getBestStart, 
    firstCpuMove,
    secondSetCpuMove,
    cpuRandomMoves,
    blockOrWin,
}