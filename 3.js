/**
 * ## 3. Check Whether a Number is Prime

**NOTES:**

- Do not use any built-in functions such as `.sort()`, `Math.max()`, etc.
- You may only use loops and conditional statements.

Determine whether a number is a **Prime Number** or **Not a Prime Number**.

```js
// Example 1
var number = 17;

// Result:
// 17 is a Prime Number.

// Example 2
var number = 15;

// Result:
// 15 is Not a Prime Number.
```
*/

let number = 17;
let factors = 0;

// Counting Factors
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    factors += 1;
  }
}
// Ternary
factors === 2
  ? console.log(`${number} is a Prime Number`)
  : console.log(`${number} is a Not Prime Number`);
