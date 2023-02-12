// makes it so we can take arguments from the terminal!
const args = process.argv.slice(2).sort();

// console.log(args);

const timer = function(inputArray) {
  if (inputArray.length === 0) {
    throw new Error("You didn't input anything!");
  }
  for (let element of inputArray) {
    if (parseInt(element) >= 0 && typeof parseInt(element) === "number") {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(`beep ${element}`);
      }, parseInt(element) * 1000);
    } else if (typeof parseInt(element) !== "number") {
      throw new Error("You input something that isn't a number!");
    }
  }
};

timer(args);
