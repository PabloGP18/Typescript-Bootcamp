type Operation = "multiply" | "add" | "divide";
type Result = number;

const calculator = (a: number, b: number, op: Operation): Result => {
  // just checking if your using a string from array operations
  //   if (!operation.includes(op)) {
  //     console.log("this operation is not defined");
  //   }
  if (op === "multiply") return a * b;
  if (op === "add") return a + b;
  if (op === "divide") {
    /* result is a number so it can not return back a string
    This is why I throw an error instead*/
    if (b === 0) throw new Error("You can't divide by 0!");
    return a / b;
  }

  throw new Error("Operation is not valid");
};

/* try {
  console.log(calculator(1, 3, "add"));
  console.log(calculator(1, 3, "multiply"));
  console.log(calculator(1, 0, "divide"));
} catch (error) {
  console.log("Something went wrong", error);
 }*/

console.log(process.argv);
