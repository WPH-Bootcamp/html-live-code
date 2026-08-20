/**
 * ## 1. Display Multiples of 3, Multiples of 5, and Multiples of Both 3 and 5

```js
let number = 15;

// Result:
1
2
3 is a Multiple of 3
4
5 is a Multiple of 5
6 is a Multiple of 3
7
8
9 is a Multiple of 3
10 is a Multiple of 5
11
12 is a Multiple of 3
13
14
15 is a Multiple of 3 and 5
```
*/

let number = 15;

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} is a Multiple of 3 and 5`);
  } else if (i % 5 === 0) {
    console.log(`${i} is a Multiple of 5`);
  } else if (i % 3 === 0) {
    console.log(`${i} is a Multiple of 3`);
  } else {
    console.log(i);
  }
}
