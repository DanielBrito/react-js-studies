import React, { useRef } from "react";

export const HelloRef = () => {
  const renders = useRef(0);

  // Updating and not causing a 're-render':
  // console.log("HelloRef renders: ", renders.current++);

  return <p>HelloRef</p>;
};
