
/**
 * Automated Game Runner
 * 
 * This script simulates running the entire game X times using jsdom.
 * It is intended for stress-testing or error detection.
 * 
 * Usage: npx ts-node /test/automated-game-runner.ts
 */

import { JSDOM } from "jsdom";
import path from "path";

// Number of times to run the game
const NUM_RUNS = 100;

// Path to your main game file (adjust if needed)
const GAME_ENTRY = path.resolve(__dirname, "../../dist/bundle.js");

async function runSingleGame() {
    // Set up a fresh DOM for each run
    const dom = new JSDOM(`
        <html>
        <body>
            <div id="board"></div>
            <div class="grid"></div>
            <div class="notification"><h2></h2></div>
            <span id="player_one_score"></span>
            <span id="player_two_score"></span>
            <button class="start-btn"></button>
            <div class="modal"></div>
            <input type="checkbox" id="playerFirstMove">
            <input type="checkbox" id="hardMode">
            <input type="checkbox" id="vsCpu">
            <input type="checkbox" id="demo">
            <input type="checkbox" id="vsTwitch">
        </body>
        </html>
    `, { url: "http://localhost", runScripts: "dangerously", resources: "usable" });

    // Patch globals for the imported code
    // @ts-ignore
    global.window = dom.window;
    // @ts-ignore
    global.document = dom.window.document;
    // @ts-ignore
    global.HTMLElement = dom.window.HTMLElement;
    // @ts-ignore
    global.NodeList = dom.window.NodeList;

    // Set up checkboxes as desired (example: vsCpu, hardMode)
    (document.getElementById('playerFirstMove') as HTMLInputElement).checked = false;
    (document.getElementById('hardMode') as HTMLInputElement).checked = true;
    (document.getElementById('vsCpu') as HTMLInputElement).checked = false;
    (document.getElementById('demo') as HTMLInputElement).checked = true;
    (document.getElementById('vsTwitch') as HTMLInputElement).checked = false;

    // Import and run the main game logic
    // This assumes your index.ts does not immediately exit and is compatible with jsdom
    await import(GAME_ENTRY);

    // Simulate clicking the start button to begin the game
    const startBtn = document.querySelector('.start-btn') as HTMLElement;
    if (startBtn) {
        startBtn.click();
    }

    // Wait for the game to play out (adjust delay as needed)
    await new Promise(resolve => setTimeout(resolve, 2000));
}

async function runSimulations() {
    let errorCount = 0;
    for (let i = 0; i < NUM_RUNS; i++) {
        try {
            await runSingleGame();
            console.log(`Simulation ${i + 1} completed successfully.`);
        } catch (err) {
            errorCount++;
            console.error(`Error in simulation ${i + 1}:`, err);
        }
    }
    console.log(`\nSimulations complete. Total errors: ${errorCount} out of ${NUM_RUNS}`);
}

runSimulations();