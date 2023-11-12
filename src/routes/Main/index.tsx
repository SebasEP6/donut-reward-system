import { useState } from "react";

const Main = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Click {count}
      </button>
    </>
  );
};

export default Main;