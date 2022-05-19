function fizzBuzz(n: number): void {
  for (let i = 1; i < n + 1; i++) {
    const fizz = i % 3 == 0;
    const buzz = i % 5 == 0;

    if (fizz && buzz) console.log("FizzBuzz");
    else if (fizz) console.log("Fizz");
    else if (buzz) console.log("Buzz");
    else console.log(n);
  }
}
