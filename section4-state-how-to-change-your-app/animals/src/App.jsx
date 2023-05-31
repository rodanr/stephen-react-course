import "./App.css";
import { useState } from "react";
import AnimalShow from "./components/AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
};

console.log(getRandomAnimal());

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">
        {animals.map((animal, index) => (
          <AnimalShow type={animal} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
