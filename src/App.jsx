import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: { display: "0" },
  reducers: {
    input: (state, action) => {
      if (state.display === "0") {
        state.display = action.payload;
      } else {
        state.display += action.payload;
      }
    },
    clear: (state) => {
      state.display = "0";
    },
    deleteLast: (state) => {
      state.display =
        state.display.length > 1 ? state.display.slice(0, -1) : "0";
    },
    calculate: (state) => {
      try {
        state.display = eval(state.display).toString();
      } catch {
        state.display = "Error";
      }
    },
  },
});

const store = configureStore({
  reducer: { calculator: calculatorSlice.reducer },
});
const { input, clear, deleteLast, calculate } = calculatorSlice.actions;

const Calculator = () => {
  const display = useSelector((state) => state.calculator.display);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    if (value === "C") dispatch(clear());
    else if (value === "DEL") dispatch(deleteLast());
    else if (value === "=") dispatch(calculate());
    else dispatch(input(value));
  };

  return (
    <>
      {" "}
      <div className="calculator-container " style={{ marginTop: "50px" }}>
        <h2 className="title">Calculator</h2>
        <div className="display">{display}</div>
        <div className="buttons-grid">
          {[
            "7",
            "8",
            "9",
            "DEL",
            "4",
            "5",
            "6",
            "+",
            "1",
            "2",
            "3",
            "-",
            ".",
            "0",
            "/",
            "x",
          ].map((value) => (
            <button
              key={value}
              className="btn"
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          ))}
          <button className="btn reset" onClick={() => handleClick("C")}>
            RESET
          </button>
          <button className="btn equals" onClick={() => handleClick("=")}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

export default App;
