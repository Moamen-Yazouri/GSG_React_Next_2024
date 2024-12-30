import { useState } from 'react'
import { doCalc } from './utils/doClac.ts'
import Number from "./components/Number/Number.tsx"
import Result from "./components/Result/Result.tsx"
import './App.css'
import './fonts.css'
import Operation from './components/Operation/Operation.tsx';
const numbers: string[] = [];
let myExp: string[] = [];
const operationsArray:string[] = ["del", "AC", "-", "+", "X", "/", ".", "="]
export const generateNums = () => {
  for(let i = 1; i < 10; i++) {
    numbers.push(i.toString());
  }
  numbers.push("0");
}
generateNums();

function App() {
  const [expresion, setExpresion] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const addNumber = (value: string) => {
      if(result) {
        setExpresion(value);
        myExp = [value];
        setResult("")
      }
      else {
        setExpresion(expresion.concat(value));
        if(myExp.length > 0) {
          const lastIndex: number = myExp.length -1
          if(
              !isNaN(parseInt(myExp[lastIndex])) ||
              myExp[lastIndex].endsWith(".") ||
              ["+", "-"].includes(myExp[lastIndex]) && ["+", "-"].includes(myExp[lastIndex - 1])
            ) {
            myExp[lastIndex] = myExp[lastIndex].concat(value);
          }
          else if(myExp.length == 1 && ["+", "-"].includes(myExp[0])) {
            myExp[0] = myExp[0].concat(value);
          }
          else {
            myExp.push(value);
          }
        }
        else {
          myExp.push(value);
        }
      }
  }
  const addOperation = (operation: string) => {
    if(operation === "AC") {
      setExpresion("")
      setResult("");
      myExp = [];
    }
    else if (operation === ".") {
      setExpresion(expresion.concat("."));
      myExp[myExp.length - 1] = myExp[myExp.length - 1].concat(operation);
    }
    else if(operation === "=") {
      if(expresion.length > 0) {
        setExpresion(expresion.concat("="))
        const result: string = doCalc(myExp);
        !isNaN(+result) ? setResult(result) : setExpresion(result); 
        myExp = [];
      }
    }
    else if(operation === "del") {
      if(result !== "") {
        setResult("");
      }
      else {
        setExpresion(expresion.slice(0, -1));
      }
    }
    else if(["+", "-", "X", "/"].includes(operation)) {
      if(result !== "") {
        myExp.push(result);
        myExp.push(operation);
        setExpresion(result.concat(operation))
        setResult(""); 
      }
      else {
        setExpresion(expresion.concat(operation))
        myExp.push(operation);
      }
    }
  }
  return (
    <>
      <Result expresion={expresion}  result={result}/>
      <div className='calculator'>
        <div className="numbers">
        {
            numbers.map((num) => (
              <Number
                value = {num}
                key={num}
                addToExp={addNumber}
              />
            ))
          }
          </div> 
          <div className="operations">
          {
            operationsArray.map((op) => (
              <Operation
                operation = {op}
                key={op}
                addToExp={addOperation}
              />
            ))
          }
          </div>
      </div>
    </>
  )
}

export default App
