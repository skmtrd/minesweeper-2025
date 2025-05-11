import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="p-4 font-bold text-3xl">Hello World</div>
      <button
        type="button"
        className="rounded-md bg-blue-500 p-2 text-white"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click me
      </button>
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
