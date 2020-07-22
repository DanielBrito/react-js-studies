import React, { useState } from "react";

import firebase from "../config/firebase";

const EntryForm = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // Do not refresh the app after submit

    firebase
      .firestore()
      .collection("times")
      .add({
        title,
        time_seconds: parseInt(time),
      })
      .then(() => {
        setTitle("");
        setTime("");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>ADD TIME ENTRY</h4>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
        ></input>
      </div>
      <div>
        <label>Time</label>
        <input
          type="number"
          value={time}
          onChange={(event) => setTime(event.currentTarget.value)}
        ></input>
      </div>
      <button>Add Entry</button>
    </form>
  );
};

export default EntryForm;
