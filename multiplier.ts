const multiplication = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};

multiplication(2, 4, "multiplying numbers 2 and 4, the result is: ");

// A way to just run with node a function is using process.argv
// Always start from position 2 and 3 because the first 2 positions are taken

console.log(process.argv);

const a: number = Number(process.argv[2]);
const b: number = Number(process.argv[3]);

multiplication(a, b, `Multiplying ${a} and ${b} and the result is: `);

// You can also make a function parseArgument and then you can control better what you are passing the process.argv

const parseArguments = (args): Array<number> => {
  if (args.length != 4) throw new Error("Wrong number of arguments");

  const firstNumber = Number(args[2]);
  const secondNumber = Number(args[3]);

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    return [firstNumber, secondNumber];
  } else {
    throw new Error("provided values were not numbers");
  }
};

const cleanArguments = parseArguments(process.argv);

const c: number = Number(cleanArguments[0]);
const d: number = Number(cleanArguments[1]);

multiplication(c, d, `Multiplying ${c} and ${d} and the result is: `);
