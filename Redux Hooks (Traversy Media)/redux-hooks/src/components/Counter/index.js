import React, { useEffect, useState } from "react";

export default function EffectExample() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `counter = ${counter}`;

    return () => (document.title = "React App"); // Simulate ComponentWillUnmount
  }, [counter]); // Simulate ComponentDidUpdate or ComponentDidMount (when [])

  return (
    <>
      <h1>Você clicou {counter} vez(es)</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </>
  );
}
