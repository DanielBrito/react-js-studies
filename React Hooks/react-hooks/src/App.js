import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
  useReducer,
  useContext,
} from "react";
import { useForm } from "./useForm";

import { Hello } from "./Hello";
import { Square } from "./Square";
import { HelloCallback } from "./HelloCallback";
import { HelloRef } from "./HelloRef";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

import posts from "./posts.json";
import { UserContext } from "./UserContext";

import { login } from "./login";

function computeLongestWord(arr) {
  if (!arr) {
    return [];
  }

  // console.log("Computing longest word");

  let longestWord = "";

  arr.forEach((post) =>
    post.body.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );

  return longestWord;
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
}

export function App() {
  // Variables:

  // Using useState in an object:
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });

  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
    city: "",
  });

  const [showHello, setShowHello] = useState(true);
  const [showHelloRef, setShowHelloRef] = useState(true);

  const [number, setNumber] = useState(() =>
    JSON.parse(localStorage.getItem("number"))
  );

  // eslint-disable-next-line no-unused-vars
  const { data, loading } = useFetch(
    `http://numbersapi.com/${number ? number : 0}/trivia`
  );

  const inputRef = useRef();
  const triviaRef = useRef();

  const [{ height, width }, setDimensions] = useState({ height: 0, width: 0 });

  const rect = useMeasure(triviaRef, [data]);

  const [newCount, setNewCount] = useState(0);

  const increment = useCallback(
    (n) => {
      setNewCount((c) => (c += n));
    },
    [setNewCount]
  );

  const favoriteNumbers = [7, 11, 13, 17];

  const [memoCount, setMemoCount] = useState(0);

  const longestWord = useMemo(() => computeLongestWord(posts), []);

  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState("");

  const { user, setUser } = useContext(UserContext);

  // useEffect:

  useEffect(() => {
    // console.log("Rendering component");
  }, [values.email, values.password]);

  useEffect(() => {
    // console.log("Single rendering (componentDidMount)");

    // Cleanup function (componentWillUnmount)
    return () => {
      // console.log("Unmount");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("number", JSON.stringify(number));
  }, [number]);

  // useLayoutEffect:
  useLayoutEffect(() => {
    // Using 'inputRef' from 'city':
    // console.log(triviaRef.current.getBoundingClientRect());

    setDimensions({
      height: triviaRef.current.getBoundingClientRect().height,
      width: triviaRef.current.getBoundingClientRect().width,
    });
  }, [data]);

  return (
    <>
      <h1>MAIN PAGE</h1>
      <div>
        <h2>
          useContext: <em>{JSON.stringify(user, null, 2)}</em>
        </h2>
        {user ? (
          <button
            onClick={() => {
              setUser(null);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={async () => {
              const user = await login();
              setUser(user);
            }}
          >
            Login
          </button>
        )}
      </div>
      <hr />
      <div>
        <h2>useState</h2>
        <button
          onClick={() =>
            setCount((currentState) => ({
              count1: currentState.count1 + 1,
              count2: currentState.count2 + 1,
            }))
          }
        >
          +
        </button>
        <div>count1 = {count1}</div>
        <div>count2 = {count2}</div>
        <hr />
        <h2>useEffect and useForm (custom hook)</h2>
        <label>Email </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <br />
        <label>Password </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <br />
        <label>First name </label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        <hr />
        <h2>useEffect and lifecycle</h2>
        <button onClick={() => setShowHello(!showHello)}>Toggle</button>
        {showHello && <Hello />}
        <hr />
        <h2>useEffect and useFetch (custom hook)</h2>
        <button onClick={() => setNumber((n) => (n += 1))}>Next number</button>
        <p ref={triviaRef} style={{ display: "inline" }}>
          {!data ? " Loading..." : " " + data}
        </p>
        <hr />
        <h2>useRef</h2>
        <label>City </label>
        <input
          ref={inputRef}
          name="city"
          value={values.city}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = "yellow";
          }}
        >
          Focus
        </button>
        <hr />
        {/* Using 'inputRef' from 'city': */}
        <h2>useRef and HelloRef</h2>
        <button onClick={() => setShowHelloRef(!showHelloRef)}>Toggle</button>
        {showHelloRef && <HelloRef />}
        <hr />
        <h2>useLayoutEffect and useMeasure (custom hook)</h2>
        <label>Trivia number dimensions:</label>
        <p>{JSON.stringify(rect)}</p>
        <p>{`x: ${height} and y: ${width}`}</p>
        <hr />
        <h2>useCallback</h2>
        <div>
          <HelloCallback increment={increment} />
          <p>New count: {newCount}</p>

          <h3>Favorite numbers</h3>
          {favoriteNumbers.map((n) => {
            return <Square key={n} increment={increment} n={n} />;
          })}
        </div>
        <hr />
        <h2>useMemo</h2>
        <p>Memo count: {memoCount}</p>
        <button onClick={() => setMemoCount(memoCount + 1)}>Increment</button>
        <p>Longest word: {longestWord}</p>
        <hr />
        <h2>useReducer</h2>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ type: "ADD_TODO", text });
              setText("");
            }}
          >
            <label>To Do: </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
          <h3>Todo Counter: {todoCount}</h3>
          <ul>
            {todos.map((todo, index) => (
              <li
                key={todo.text}
                onClick={() => dispatch({ type: "TOGGLE_TODO", index })}
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                  color: todo.completed ? "green" : "black",
                }}
              >
                {todo.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
