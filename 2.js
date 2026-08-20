/**
 ## 2. Print Watches (Weight: 35 pts)

**NOTE:**
Do not print the output manually. You must use `for` loops and `if` statements.

Display the values of an array as a single string.

Make sure the output matches the required format, including commas (`,`), the word **"and"**, and the period (`.`).

```js
// Example 1
let watches = ["Swiss Army", "Dublot", "G-Shock"];

// Result:
// I have Swiss Army, Dublot, and G-Shock.

// Example 2
let watches = ["A", "B", "C", "D", "E"];

// Result:
// I have A, B, C, D, and E.
```
 */

let watches = ["Swiss Army", "Dublot", "G-Shock"];
// let watches = ["A", "B", "C", "D", "E"];

let str = "I have ";

for (let i = 0; i < watches.length; i++) {
  if (i === watches.length - 1) {
    str += `and ${watches[i]}.`;
  } else {
    str += `${watches[i]}, `;
  }
}

console.log(str);
