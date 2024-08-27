import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-1 gap-2 text-3xl font-serif">
        My respect is {count}
        <button
          onClick={() => setCount((count) => count + 1)}
          className="border-2 border-red-500 rounded-md px-2 hover:bg-rose-500/40"
        >
          {"Respect++"}
        </button>
        <div className="border-2 border-purple-500 rounded-md px-2 hover:bg-yellow-500/60">
          <a href="/test">Test</a>
        </div>
      </div>
    </>
  );
};
