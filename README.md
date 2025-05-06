# Tic Tac Toe Game

Using what I learnt from the earlier versions (JavaScript/Python) I tried again with TypeScript, SCSS and Jest for testing. Play against another player, the CPU, or watch a demo mode. The game supports variable board sizes and several play modes.

*Still not happy with the style*

## To-Do
- Finish cpu logic for responding to non-optimal moves
---

## Features

- **Classic Tic Tac Toe gameplay** with customizable board size (default 3x3)
- **Play against another player or the CPU**
- **Demo mode**: watch the CPU play itself
- **Hard mode**: smarter CPU moves
- **Responsive UI** with animated modals for game events
- **Score tracking** for both players

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe-ts.git
   cd tic-tac-toe-ts
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Build and run the project:**
   ```bash
   npm run build
   npm start
   ```
   Or, for development with hot reload:
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:[Insert Port Here]
   ```

---

## Customization

- **Board Size:** Change the `boardSize` variable in `index.ts` to set a different grid size.
- **Player Colors/Labels:** Edit the `DEFAULT_PLAYERS` array in `index.ts`.
- **CPU Logic:** Enhance or modify CPU strategies in `funcUtil.ts`.

---

## License

MIT License

---

## Acknowledgments

- Inspired by classic Tic Tac Toe and modern web development best practices.
- Built with TypeScript, SCSS, and vanilla JS!