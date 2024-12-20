import { useState } from 'react'
import Number from "./components/Number/Number.tsx"
import Result from "./components/Result/Result.tsx"
import './App.css'
import './fonts.css'
import Operation from './components/Operation/Operation.tsx';
const numbers: string[] = [];
let myExp: string[] = [];
const generateNums = () => {
  for(let i = 1; i < 10; i++) {
    numbers.push(i.toString());
  }
  numbers.push("0");
}
const doCalc = (arr: string[]): string => {
  if(arr.length < 3 ||
    arr.some((number, index) => isNaN(+number) && !["X", "/", "+", "-"].includes(number) ||
    number === "/" && arr[index + 1] === "0" ||
    ["X", "/", "+", "-"].includes(number) && isNaN(+arr[index + 1]) ) 
    ) {
    return "Invalied Expresion"
  }

  try{
    while(arr.includes("X") || arr.includes("/")) {
      const opIndex = arr.includes("X")? arr.indexOf("X") :  arr.indexOf("/");
      if(arr.includes("X")) {
        arr.splice((opIndex - 1), 3, (+arr[opIndex - 1] * +arr[opIndex + 1]).toString())
      }
      else {
        arr.splice((opIndex - 1), 3, (+arr[opIndex - 1] / +arr[opIndex + 1]).toString())
      }
    }

    while(arr.includes("+") || arr.includes("-")) {
      const opIndex = arr.includes("+")? arr.indexOf("+") :  arr.indexOf("-");
      arr.includes("+") ? 
      arr.splice((opIndex - 1), 3, (+arr[opIndex - 1] + +arr[opIndex + 1]).toString())
      : arr.splice((opIndex - 1), 3, (+arr[opIndex - 1] - +arr[opIndex + 1]).toString());
    }
  }
  catch (error){
    return "Error..!";
  }
  
  return arr[0];
}
generateNums();

function App() {

  const [expresion, setExpresion] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const addNumber = (value: string) => {
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

    else if(["+", "-", "*", "/"].includes(operation)) {
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
            <Operation operation={"del"} addToExp={addOperation}/>
            <Operation operation={"AC"} addToExp={addOperation}/>
            <Operation operation={"-"} addToExp={addOperation}/>
            <Operation operation={"+"} addToExp={addOperation}/>
            <Operation operation={"X"} addToExp={addOperation}/>
            <Operation operation={"/"} addToExp={addOperation}/>
            <Operation operation={"."} addToExp={addOperation}/>
            <Operation operation={"="} addToExp={addOperation}/>
          </div>
      </div>
    </>
  )
}

export default App
