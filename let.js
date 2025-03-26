// let – Block Scoped (New Way)
/**
 * let is block-scoped, meaning it is only accessible inside {} where it is declared.
 * It can be reassigned but cannot be redeclared in the same scope.
 * It is hoisted, but not initialized (cannot be used before declaration).
 */
//  Example of let
function testLet() {
  let y = 10;
  if (true) {
    let y = 20; // This is a separate variable (block-scoped)
    console.log(y); // Output: 20
  }
  console.log(y); // Output: 10 (Not affected by block scope)
}
testLet();
