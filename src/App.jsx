import React, { useState } from 'react'
import "./App.scss"

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="],
]

const App = () => {

  const [result, setResult] = useState("0")

  const handleClick = (e) => {
    const value = e.target.getAttribute("value")

    switch (value) {
      case "DEL":

        break;

      case "+":

        break;

      case "-":

        break;

      case "/":

        break;

      case "x":

        break;

      case "RESET":

        break;

      case "=":

        break;

      default:
        break;
    }
  }

  return (
    <div className='wrapper'>
      <div className='cal_title'>
        <span>calc</span>
      </div>
      <div className='cal_result mt-10'>
        <span>{result}</span>
      </div>
      <div className='cal_pad mt-10'>
        {
          btnValues.flat().map((item, i) => {
            return (
              <button className={`cal_btn 
              ${item == "DEL" ? 'del' : null}
              ${item == "RESET" ? 'del' : null}
              ${item == "=" ? 'eq' : null}
              `} value={item} key={i} onClick={handleClick}>{item} </button>
            )
          })
        }

      </div>
    </div>
  )
}

export default App