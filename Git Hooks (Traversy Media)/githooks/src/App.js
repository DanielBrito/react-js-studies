import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [location, setLocation] = useState({});

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/DanielBrito/repos');
    const data = await response.json();

    setRepositories(data);
  }, []); // Render just once, when application is loaded (ComponentDidMount)

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  // Working as an event listener (ComponentDidUpdate):
  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
  }, []);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(newRepositories);
  }

  function handlePositionReceived({coords}){
    const {latitude, longitude} = coords;
    setLocation({latitude, longitude});
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span style={{ color: "red" }}> ❤️ </span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
      <footer style={{display: "flex", justifyContent: "center", width: "100%"}}>
        Latitude: {location.latitude} | Longitude: {location.longitude}
      </footer>
    </>
  );
}