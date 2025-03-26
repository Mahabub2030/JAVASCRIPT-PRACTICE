// 3️⃣ const – Block Scoped (New Way, Cannot Be Reassigned)

/**
 * const is block-scoped, similar to let.
 * It must be assigned a value when declared.
 * It cannot be reassigned after declaration.
 * It does not mean immutable, objects and arrays can still be modified.
 * 
 */
// ✅ Example of const
const PI = 3.1416;
console.log(PI); // Output: 3.1416

// PI = 3.14; ❌ Error! Cannot reassign a `const`
const person = { name: "John", age: 25 };
person.age = 26; // ✅ Allowed (modifying property)
console.log(person.age); // Output: 26
console.log(person.name); // Output: 26

// person = { name: "Mike", age: 30 }; ❌ Error! Cannot reassign the object
