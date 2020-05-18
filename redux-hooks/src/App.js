import React from "react";
import { Provider } from "react-redux";

import CourseList from "./components/CourseList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CourseList />
      </div>
    </Provider>
  );
}

export default App;
