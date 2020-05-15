import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";

import * as themes from "./styles/themes";
import ThemeContext from "./styles/themes/context";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  function toggleTheme() {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <ThemeContext.Consumer>
          {(theme) => (
            <ThemeProvider theme={theme}>
              <TodoList/>
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
