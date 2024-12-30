
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
export {
    doCalc
}