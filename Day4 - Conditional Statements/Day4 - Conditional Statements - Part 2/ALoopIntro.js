/*
 * ============================================================
 * JavaScript Loops - Points to Remember
 * ============================================================
 *
 * Loops are used to execute a block of code repeatedly.
 * The correct loop depends on whether you need indexes, values,
 * object keys, or a condition-based repetition.
 *
 * ------------------------------------------------------------
 * 1. for Loop
 * ------------------------------------------------------------
 * Use it when the number of iterations is known.
 *
 * Syntax:
 * for (initialization; condition; update) {
 *   // code
 * }
 *
 * Example:
 * for (let i = 1; i <= 3; i++) {
 *   console.log(i);
 * }
 *
 * ------------------------------------------------------------
 * 2. while Loop
 * ------------------------------------------------------------
 * Use it when a block should run while a condition is true.
 *
 * Syntax:
 * while (condition) {
 *   // code
 * }
 *
 * Example:
 * let count = 1;
 * while (count <= 3) {
 *   console.log(count);
 *   count++;
 * }
 *
 * ------------------------------------------------------------
 * 3. do...while Loop
 * ------------------------------------------------------------
 * It always executes at least one time before checking the condition.
 *
 * Syntax:
 * do {
 *   // code
 * } while (condition);
 *
 * Example:
 * let number = 1;
 * do {
 *   console.log(number);
 *   number++;
 * } while (number <= 3);
 *
 * ------------------------------------------------------------
 * 4. for...of Loop
 * ------------------------------------------------------------
 * Use it to iterate over values in an array or characters in a string.
 *
 * Syntax:
 * for (const value of iterable) {
 *   // code
 * }
 *
 * Example:
 * const colors = ["Red", "Blue", "Green"];
 *
 * for (const color of colors) {
 *   console.log(color);
 * }
 *
 * ------------------------------------------------------------
 * 5. for...in Loop
 * ------------------------------------------------------------
 * Use it to iterate over keys or properties of an object.
 *
 * Syntax:
 * for (const key in object) {
 *   // code
 * }
 *
 * Example:
 * const user = { name: "Yogesh", role: "QA" };
 *
 * for (const key in user) {
 *   console.log(key, user[key]);
 * }
 *
 * ------------------------------------------------------------
 * 6. forEach() Method
 * ------------------------------------------------------------
 * forEach() is an array method that runs a function for every item.
 *
 * Example:
 * const numbers = [10, 20, 30];
 *
 * numbers.forEach((number) => {
 *   console.log(number);
 * });
 *
 * ------------------------------------------------------------
 * Important Points
 * ------------------------------------------------------------
 * 1. Always update the loop variable to avoid an infinite loop.
 * 2. Use break to stop a loop immediately.
 * 3. Use continue to skip the current iteration.
 * 4. Use for...of for array values.
 * 5. Use for...in for object keys.
 * 6. Keep loop conditions simple and easy to understand.
 *
 * ============================================================
 */