import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { App } from "./App";
import { AboutPage } from "./AboutPage";
import { UserContext } from "./UserContext";

function AppRouter() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route path="/" exact component={App} />
          <Route path="/about/" component={AboutPage} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
