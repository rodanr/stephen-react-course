/* eslint-disable react/prop-types */
/**
 * Notes on using useReducer (use useState whenever a state is necessary)
 *
 * useReducer is used when two or more than two states are used in the component
 * useful when you have different closely related pieces of state
 * useful when future state values depend on the current state
 */

import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const ACTION_TYPE = {
  INCREMENT_COUNT: "increment",
  DECREMENT_COUNT: "decrement",
  SET_VALUE_TO_ADD: "change-value-to-add",
  ADD_VALUE_TO_COUNT: "add-value-to-count",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case ACTION_TYPE.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case ACTION_TYPE.SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ACTION_TYPE.ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      // throw new Error(`Unexpected Action Type: ${action.type}`);
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: ACTION_TYPE.INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: ACTION_TYPE.DECREMENT_COUNT });
  };

  const handleChange = (e) => {
    dispatch({
      type: ACTION_TYPE.SET_VALUE_TO_ADD,
      payload: parseInt(e.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPE.ADD_VALUE_TO_COUNT });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg m-3">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button className="bg-green-300 m-3" onClick={increment}>
          Increment
        </Button>
        <Button className="bg-red-400 m-3" onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
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
