/* eslint-disable react/prop-types */
import "./App.css";

// taking props inputType, minValue and style
const InputField = ({ inputType, minValue, style }) => (
  <input type={inputType} min={minValue} style={style} />
);

export default function App() {
  // computed data or values
  const name = "Samantha";
  const age = 23;
  const style = {
    border: "1px solid red",
  };

  // components to show
  return (
    <>
      <h1>
        Hi, my name is {name} and my age is {age}
      </h1>
      <InputField inputType={"number"} minValue={5} style={style} />
    </>
  );
}
