import { cellNumberType } from "../App";

export const Cell = ({
  number,
  onClick,
  x,
  y,
}: {
  number: number;
  onClick: (x: number, y: number) => void;
  x: number;
  y: number;
}) => {
  // 空いていない状態
  if (number === -10) {
    return (
      <button
        type="button"
        className="size-[50px] border-8 border-gray-600"
        onClick={() => onClick(x, y)}
      />
    );
  }

  // 空いている状態
  if (cellNumberType.OPENED.includes(number)) {
    return (
      <button
        type="button"
        className="size-[50px] border-4 border-gray-400 font-bold"
        onClick={() => onClick(x, y)}
      >
        {number === 0 ? "" : number}
      </button>
    );
  }

  // 爆弾が露呈している状態
  if (number === 100) {
    return (
      <button
        type="button"
        className="size-[50px] border-8 border-red-400"
        onClick={() => onClick(x, y)}
      />
    );
  }

  return <div className="size-[50px] border border-black">{number}</div>;
};
