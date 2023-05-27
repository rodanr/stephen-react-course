/* eslint-disable react/prop-types */
import "./App.css";

/**
 * ----------------------------------------------------------------------------
 *                        Converting HTML to JSX
 * ----------------------------------------------------------------------------
 * 1. All prop names follow camelCase
 *
 * example:
 *
 *      HTML -> <input maxlength="5"/>
 *      JSX -> <input maxLength="5"/> (throws console error, can't pass "5" like this)
 *
 * 2. Number attributes use curly braces
 *
 * example:
 *
 *      HTML -> <input maxlength="5"/>
 *      JSX -> <input maxLength={5}/> (This will work)
 *
 * 3. Boolean 'true' can be written with just the property name. 'False' should
 * be written with curly braces
 *
 * example:
 *
 *      HTML -> <input spellcheck="true"/> <input spellcheck="false"/>
 *      JSX -> <input spellCheck/> (optional to pass {true}) <input spellCheck={false}/>
 *
 * 4. The 'class' attribute is written as 'className'
 *
 * example:
 *
 *      HTML -> <div class="divider"/>
 *      JSX -> <div className="divider"/>
 *
 * 5. In-line styles are provided as objects
 * example:
 *
 *      HTML -> <div style="text-decoration: 'none'; padding: '5px';"/>
 *      JSX -> <div style={{textDecoration: 'none', padding: '5px'/>
 * ----------------------------------------------------------------------------
 */

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
