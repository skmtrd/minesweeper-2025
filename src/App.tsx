"use client";
import { useState } from "react";
import { Cell } from "./components/cell";

const countAroundBombs = (x: number, y: number, bombs: Bomb[]) => {
  let bombCount = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (bombs.some((bomb) => bomb.x === x + i && bomb.y === y + j)) {
        bombCount++;
      }
    }
  }
  return bombCount;
};

const getBombsPositions = (quantity: number, exclude: Bomb) => {
  const bombs: Bomb[] = [];
  while (bombs.length < quantity) {
    const x = Math.floor(Math.random() * 9);
    const y = Math.floor(Math.random() * 9);
    if (
      !bombs.some((bomb) => bomb.x === x && bomb.y === y) &&
      !(x === exclude.x && y === exclude.y)
    ) {
      bombs.push({ x, y });
    }
  }
  return bombs;
};

const generateBombPlacedBoard = (board: number[][], bombs: Bomb[]) => {
  const bombPlacedBoard = structuredClone(board);
  for (const bomb of bombs) {
    bombPlacedBoard[bomb.y][bomb.x] = cellNumberType.BOMB;
  }
  return bombPlacedBoard;
};

const generateNumberPlacedBoard = (board: number[][], bombs: Bomb[]) => {
  const numberPlacedBoard = structuredClone(board);
  for (let y = 0; y < numberPlacedBoard.length; y++) {
    for (let x = 0; x < numberPlacedBoard[y].length; x++) {
      if (numberPlacedBoard[y][x] === cellNumberType.OPENED[0]) {
        const bombCount = countAroundBombs(x, y, bombs);
        numberPlacedBoard[y][x] = bombCount;
      }
    }
  }
  return numberPlacedBoard;
};

const checkIsGameOver = (board: number[][], bombsPositions: Bomb[]) => {
  for (const bomb of bombsPositions) {
    if (cellNumberType.OPENED.includes(board[bomb.y][bomb.x])) {
      return true;
    }
  }
  return false;
};

const INITIAL_BOARD = Array(9)
  .fill(0)
  .map(() => Array(9).fill(-10));

interface Bomb {
  x: number;
  y: number;
}

export const cellNumberType = {
  CLOSED: -10,
  OPENED: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  BOMB: 100,
};

function App() {
  const [board, setBoard] = useState<number[][]>(INITIAL_BOARD);
  const [bombs, setBombs] = useState<Bomb[]>([]);
  const [bombQuantity, setBombQuantity] = useState(10);

  const handleClick = (x: number, y: number) => {
    if (bombs.length === 0) setBombs(getBombsPositions(bombQuantity, { x, y }));
    const newBoard = structuredClone(board);
    newBoard[y][x] = cellNumberType.OPENED[0];
    setBoard(newBoard);
  };

  const handleReset = () => {
    setBoard(INITIAL_BOARD);
    setBombs([]);
  };

  const handleBombQuantityChange = (quantity: number) => {
    handleReset();
    setBombQuantity(quantity);
  };

  const viewItems = {
    boardView: generateNumberPlacedBoard(board, bombs),
    isGameOver: false,
  };

  viewItems.isGameOver = checkIsGameOver(viewItems.boardView, bombs);

  if (viewItems.isGameOver) {
    viewItems.boardView = generateBombPlacedBoard(viewItems.boardView, bombs);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <div>
        <button
          type="button"
          className="border-2 border-gray-400 px-2"
          onClick={() => handleBombQuantityChange(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => handleBombQuantityChange(20)}
          className="border-2 border-gray-400 px-2"
        >
          20
        </button>
      </div>
      {viewItems.isGameOver && <div>Game Over</div>}
      <div className="flex size-[450px] flex-wrap bg-gray-200">
        {viewItems.boardView.map((row, y) => (
          <div key={`${y} ${row}`} className="flex">
            {row.map((cell, x) => (
              <Cell
                key={`${x}-${y}-${cell}`}
                number={cell}
                onClick={() => handleClick(x, y)}
                x={x}
                y={y}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
