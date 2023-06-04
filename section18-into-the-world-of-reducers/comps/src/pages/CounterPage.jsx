/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleChange = (e) => {
    setValueToAdd(parseInt(e.target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setCount((prevCount) => prevCount + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg m-3">Count is {count}</h1>
      <div className="flex flex-row">
        <Button className="bg-green-300 m-3" onClick={increment}>
          Increment
        </Button>
        <Button className="bg-red-400 m-3" onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={onSubmit}>
        <label>Add a lot!</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button className="bg-blue-400">Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
