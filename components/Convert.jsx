import React, { useState } from "react";
import "./Convert.css";

function Convert() {
  const [number, setNumber] = useState("");
  const [showTemp, setShowTemp] = useState(false);
  const [temp, setTemp] = useState("");
  const [result, setResult] = useState();

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeTemp = (e) => {
    setTemp(e.target.value);
  };

  const showDisplay = () => {
    if (number == 1 || number == 2) {
      setShowTemp(true);
      console.log(showTemp);
    } else {
      window.alert("OPTION INVALID, TRY AGAIN...");
      window.location.reload();
    }
  };

  const makeConversion = () => {
    if (number == 1) {
      console.log(temp);
      const cel_to_fah = temp * 1.8 + 32;
      setResult(cel_to_fah);
    } else if (number == 2) {
      const fah_to_cel = (temp - 32) * 0.5556;
      setResult(fah_to_cel);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <input
        id="option"
        onChange={handleChange}
        value={number}
        type="number"
        placeholder="Type an option..."
      />
      <button onClick={showDisplay}>ENTER</button>
      {showTemp && (
        <ul>
          <input
            id="temp"
            onChange={handleChangeTemp}
            value={temp}
            type="number"
            placeholder="Type a temp..."
          />
          <button id="btn-cal" onClick={makeConversion}>
            CALCULATE
          </button>
        </ul>
      )}

      <div className="answer">
        {result != undefined && showTemp == true && number == 1 ? (   //  Result es diferente de indefinido (porque se inicializa así), showTemp se 
          <h4>From CELSIUS to FAHRENHEIT: {result} °F </h4>           //  inicializa en false y pasa a true cuando se ejecuta el metodo showDisplay
        ) : (
          ""
        )}
        {result != undefined && showTemp == true && number == 2 ? (
          <h4>From FAHRENHEIT to CELSIUS: {result} °C </h4>
        ) : (
          ""
        )}
      </div>

      {
        <button className="btn-refresh" onClick={refreshPage}>
          RELOAD
        </button>
      }
    </>
  );
}

export default Convert;
