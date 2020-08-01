import React from "react";
import { useCountRenders } from "./useCountRenders";

export const HelloCallback = React.memo(({ increment }) => {
  useCountRenders();
  return <button onClick={() => increment(5)}>Hello Increment</button>;
});
