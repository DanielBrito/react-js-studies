import { useState, useLayoutEffect } from "react";

export const useMeasure = (ref, dependencies) => {
  const [{ height, width }, setDimensions] = useState({ height: 0, width: 0 });

  // useLayoutEffect:
  useLayoutEffect(() => {
    // Using 'inputRef' from 'city':
    // console.log(ref.current.getBoundingClientRect());

    setDimensions({
      height: ref.current.getBoundingClientRect().height,
      width: ref.current.getBoundingClientRect().width,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { height, width };
};
