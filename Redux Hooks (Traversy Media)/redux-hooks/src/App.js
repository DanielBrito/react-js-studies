import React, { useState } from "react";
import { Provider } from "react-redux";

import EffectExample from "./components/Counter";
import CourseList from "./components/CourseList";
import store from "./store";

function App() {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 5000);

  return (
    <>
      <Provider store={store}>
        <div className="App">
          <CourseList />
        </div>
      </Provider>
      <hr />
      {visible && <EffectExample />}
    </>
  );
}

export default App;
