import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function AboutPage() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <h2>
        useContext: <em>{JSON.stringify(user, null, 2)}</em>
      </h2>
    </div>
  );
}
