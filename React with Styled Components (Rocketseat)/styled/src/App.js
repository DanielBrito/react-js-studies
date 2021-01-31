import React from "react";

import { Title, TitleSmall } from "./styles";

function App() {
  return (
    <div>
      <Title fontSize={30}>
        Hello, World!
        <p>Welcome!</p>
      </Title>
      <TitleSmall>Smaller</TitleSmall>
    </div>
  );
}

export default App;
