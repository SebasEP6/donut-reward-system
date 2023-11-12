import { useState } from "react";
import Button from "../../components/Button";

const Main = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>
        Click {count}
      </Button>
    </>
  );
};

export default Main;