import './../src/styles.scss'
import { 
    createBoard,
    delay,
    winCombos,
    checkDraw,
    checkWinner,
    firstCpuMove,
    secondSetCpuMove,
    cpuRandomMoves,
    cpuMouseClick,
    blockOrWin,
} from "./funcUtil";

type Player = {
    label: string;
    color: string;
    cpu: boolean;
    name: string;
};
export type CellPosition = { row: number; col: number };
export type CellPositionArray = Array<CellPosition>;

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const gameStart = document.querySelector('.start-btn') as HTMLElement;
const updates = document.querySelector('.notification h2') as HTMLElement;
const playerOneScore = document.getElementById('player_one_score') as HTMLElement;
const playerTwoScore = document.getElementById('player_two_score') as HTMLElement;
const gameArea = document.querySelector('.grid') as HTMLElement;
const DEFAULT_PLAYERS: Player[] = [
    { label: "X", color: "rgb(0, 212, 255)", cpu: false, name: "Player one" },
    { label: "O", color: "rgb(0, 255, 179)", cpu: false, name: "Player two" }
];

let firstPlayerMoves: CellPosition[] = [];
let secondPlayerMoves: CellPosition[] = [];
let currentPlayerIndex: number = 0;
let boardSize: number = 4;
let playerFirstMove: boolean = false
let hardMode: boolean = false
let vsCpu: boolean = false
let vsTwitch: boolean = false
let demo: boolean = false


const checkboxVariableMap: { [key: string]: () => void } = {
    playerFirstMove: () => { playerFirstMove = getCheckboxValue('playerFirstMove'); updatePlayerNames(); },
    hardMode: () => { hardMode = getCheckboxValue('hardMode'); },
    vsCpu: () => { vsCpu = getCheckboxValue('vsCpu'); updatePlayerNames(); },
    demo: () => { demo = getCheckboxValue('demo'); updatePlayerNames(); },
    vsTwitch: () => { vsTwitch = getCheckboxValue('vsTwitch'); }
};

/**
 * Helper to get the checked value of a checkbox by id.
 */
function getCheckboxValue(id: string): boolean {
    const element = document.getElementById(id) as HTMLInputElement | null;
    return element ? element.checked : false;
}

/**
 * Updates the DEFAULT_PLAYERS' names and cpu flags based on vsCpu and playerFirstMove.
 */
function updatePlayerNames() {
    // Reset both to default
    DEFAULT_PLAYERS[0].name = 'Player one';
    DEFAULT_PLAYERS[1].name = 'Player two';
    DEFAULT_PLAYERS[1].cpu = false;
    DEFAULT_PLAYERS[0].cpu = false;

    if (vsCpu && !playerFirstMove) {
        DEFAULT_PLAYERS[0].name = 'Cpu';
        DEFAULT_PLAYERS[0].cpu = true;
    } else if (vsCpu && playerFirstMove) {
        DEFAULT_PLAYERS[1].name = 'Cpu';
        DEFAULT_PLAYERS[1].cpu = true;
    } else if (demo) {
        DEFAULT_PLAYERS[0].name = 'Player one';
        DEFAULT_PLAYERS[1].name = 'Player two';
        DEFAULT_PLAYERS[0].cpu = true;
        DEFAULT_PLAYERS[1].cpu = true;
    }
}

/*
* Creates delay to cpu move execution
*/


window.addEventListener('DOMContentLoaded', (e) => {
    // Set initial variable values and update player names
    Object.keys(checkboxVariableMap).forEach(id => {
        checkboxVariableMap[id]();
    });

    // Add event listeners for checkboxes
    checkboxes.forEach((checkbox) => {
        const checkboxElement = checkbox as HTMLInputElement;
        const id = checkboxElement.id;
        if (checkboxVariableMap[id]) {
            checkboxElement.addEventListener('change', () => {
                checkboxVariableMap[id]();
                // Optionally, update UI or reset game here if needed
            });
        }
    });
    gameFlow();

    
    gameStart.addEventListener('click', () => {
        
        const modal = document.querySelector('.modal') as HTMLElement;
        modal.style.display = 'none'
    
        if (DEFAULT_PLAYERS[currentPlayerIndex].cpu) {
            cpu();
        }
    });
    /** 
    * Un-comment below to set auto play
    */
    // document.getElementById('demo')?.click()
    // document.getElementById('hardMode')?.click()
    // gameStart.click()
});

/*
*Generates the cells for the game based on the boardSize variable
*/
createBoard(boardSize)
const { combos, cells } = winCombos(boardSize)

/*
*Gathers all possible win combinations (rows, columns, diagonals) for a board
*and returns an object containing an array of the win combinations and the NodeList of cell elements.
*/
winCombos(boardSize);

updates.textContent = `${DEFAULT_PLAYERS[currentPlayerIndex].name}'s turn`;
updates.style.color = DEFAULT_PLAYERS[currentPlayerIndex].color;
playerOneScore.textContent = (0).toString()
playerOneScore.style.color = DEFAULT_PLAYERS[0].color;
playerTwoScore.textContent = (0).toString()
playerTwoScore.style.color = DEFAULT_PLAYERS[1].color;

function gameFlow() {
    cells.forEach((cell) => {
        cell.addEventListener("click", (e) => {
            if (checkWinner(firstPlayerMoves, combos, boardSize) || 
                checkWinner(secondPlayerMoves, combos, boardSize) || 
                checkDraw(firstPlayerMoves, secondPlayerMoves, boardSize)) 
                return;
            
            const currentPlayer = DEFAULT_PLAYERS[currentPlayerIndex];

            const target = e.target as HTMLElement;
            if (target.textContent) return;

            const value = target.dataset.cell;
            if (!value) return;
            const [row, col] = value.split(',').map(Number);
            const move = { row, col };

            target.style.background = currentPlayer.color;
            target.textContent = currentPlayer.label;
            
            if (currentPlayer.label === DEFAULT_PLAYERS[0].label) {
                firstPlayerMoves.push(move);
            } else if (currentPlayer.label === DEFAULT_PLAYERS[1].label){
                secondPlayerMoves.push(move);
            };

            if (checkWinner(firstPlayerMoves, combos, boardSize)){
                updates.textContent = `${DEFAULT_PLAYERS[0].name} wins`;
                updates.style.color = DEFAULT_PLAYERS[0].color;
                playerOneScore.textContent = (parseInt(playerOneScore.textContent || "0") + 1).toString();
                gameOver()
            }else if (checkWinner(secondPlayerMoves, combos, boardSize)){
                updates.textContent = `${DEFAULT_PLAYERS[1].name} wins`;
                updates.style.color = DEFAULT_PLAYERS[1].color;
                playerTwoScore.textContent = (parseInt(playerTwoScore.textContent || "0") + 1).toString();
                gameOver()
            }else if(checkDraw(firstPlayerMoves, secondPlayerMoves, boardSize)){
                updates.textContent = 'Draw game';
                updates.style.color = "rgb(133, 14, 14)";
                gameOver()
            }else {
                currentPlayerIndex = (currentPlayerIndex + 1) % DEFAULT_PLAYERS.length;
                if (DEFAULT_PLAYERS[currentPlayerIndex].cpu && !demo) {
                    updates.textContent = `Cpu's turn`;
                }else {
                    updates.textContent = `${DEFAULT_PLAYERS[currentPlayerIndex].name}'s turn`;
                }
                updates.style.color = DEFAULT_PLAYERS[currentPlayerIndex].color;

                if (DEFAULT_PLAYERS[currentPlayerIndex].cpu) {
                    cpu();
                }
            };
        });
    });    
};


async function cpu() {
    const numberOfMoves = firstPlayerMoves.length + secondPlayerMoves.length

    await delay(700)
    if(!DEFAULT_PLAYERS.some(player => player.cpu)) return;

    //Playing winning moves
    if (currentPlayerIndex === 0) {
        if (blockOrWin(boardSize, firstPlayerMoves, secondPlayerMoves)) {
            let winningMove = blockOrWin(boardSize, firstPlayerMoves, secondPlayerMoves)
            if (Array.isArray(winningMove)) {
                return cpuMouseClick([winningMove[0], winningMove[1]])
            }
        }
    }else if (currentPlayerIndex === 1) {
        if (blockOrWin(boardSize, secondPlayerMoves, firstPlayerMoves)) {
            let winningMove = blockOrWin(boardSize, secondPlayerMoves, firstPlayerMoves)
            if (Array.isArray(winningMove)) {
                return cpuMouseClick([winningMove[0], winningMove[1]])
            }
        }
    };

    //Blocking winning moves
    if (currentPlayerIndex === 0) {
        if (blockOrWin(boardSize, secondPlayerMoves, firstPlayerMoves)) {
            let winningMove = blockOrWin(boardSize, secondPlayerMoves, firstPlayerMoves)
            if (Array.isArray(winningMove)) {
                return cpuMouseClick([winningMove[0], winningMove[1]])
            }
        }
    }else if (currentPlayerIndex === 1) {
        if (blockOrWin(boardSize, firstPlayerMoves, secondPlayerMoves)) {
            let winningMove = blockOrWin(boardSize, firstPlayerMoves, secondPlayerMoves)
            if (Array.isArray(winningMove)) {
                return cpuMouseClick([winningMove[0], winningMove[1]])
            }
        }
    };

    if (!hardMode) return cpuRandomMoves(firstPlayerMoves, secondPlayerMoves);

    if (numberOfMoves <= 1 && hardMode) {
        if (currentPlayerIndex === 0) {
            return firstCpuMove(boardSize, secondPlayerMoves)
        }else if (currentPlayerIndex === 1) {
            return firstCpuMove(boardSize, firstPlayerMoves)
            
        }
    };

    if (numberOfMoves >= 2 && numberOfMoves <= 3 && hardMode) {
        if (currentPlayerIndex === 0) {
            return secondSetCpuMove(boardSize, firstPlayerMoves, secondPlayerMoves)
        } else if (currentPlayerIndex === 1) {
            return secondSetCpuMove(boardSize, secondPlayerMoves, firstPlayerMoves)
        }
    }
    cpuRandomMoves(firstPlayerMoves, secondPlayerMoves)
};

async function gameOver() {
    await delay(1300)
    const cells = document.querySelectorAll('.cell')
    const updates = document.querySelector('.notification h2') as HTMLElement;
    cells.forEach(cell => {
        const element = (cell as HTMLElement)
        element.textContent = ""
        element.style.background = '#0e1a1f'
    })
    firstPlayerMoves = []
    secondPlayerMoves = []
    updates.textContent = `${DEFAULT_PLAYERS[currentPlayerIndex].name}'s turn`;
    updates.style.color = DEFAULT_PLAYERS[currentPlayerIndex].color;
    
    if (DEFAULT_PLAYERS[currentPlayerIndex].cpu) {
        cpu();
    }
}

window.addEventListener('click', (e) => {
    
});

