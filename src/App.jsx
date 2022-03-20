import React from "react";
import { useState, useEffect } from "react";
import Film from "react";
import People from "react";

const App = () => {
  const [films, setFilm] = useState([]);
  const [peoples, setPeople] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [foggle, setFoggle] = useState(false);

  useEffect(() => {
    fetch(" https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, []);

  const handleChange = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetch(" https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  const handlePeople = () => {
    setFoggle(!foggle);
  };

  if (toggle) {
    return (
      <div>
        <div className="container">
          {films.map((film) => (
            <>
              <div className="card">
                <h4 key={film.title}>
                  <b>{film.title}</b>
                </h4>
                <p><b>Produced by:</b> {film.producer}</p>
                <p><b>Directed by:</b> {film.director}</p>
                <p><b>Released in:</b> {film.release_date}</p>
                <p><b>Rotten Tomato Score:</b> {film.rt_score}</p>
                <p>{film.description}</p>
                <a id="film-des" href={film.url}>API Resource Link</a>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  } else if (foggle) {
    return (
      <div className="container">
        {peoples.map((people) => (
          <>
            <div className="card">
              <h4 key={people.name}>
                <b>{people.name}</b>
              </h4>
              <p><b>Gender:</b> {people.gender}</p>
              <p><b>Age:</b> {people.age}</p>
              <p><b>Eye Color:</b> {people.eye_color}</p>
              <p><b>Hair Color:</b> {people.hair_color}</p>
              <a id="film-des" href={people.url}>API Resource Link</a>
            </div>
          </>
        ))}
      </div>
    );
  } else {
    return (
      <>
      <div className="container-row">
      <h1>Reacting to API</h1>
        <button onClick={handleChange}>Film</button>
        <button onClick={handlePeople}>People</button>
        </div>
      </>
    );
  }
};

export default App;
