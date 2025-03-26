// in javascipit vaiables are used to store data valuses, there are three whays to declare a vaiable

/**
 * var (old way, function-scoped)
 * let (new way, block-scoped)
 * const ( new way, block-scoped, cannot be reassigned)
 */

// var – Function Scoped (Old Way)

/**
 * var is function-scoped, meaning it is accessible anywhere inside the function where it is declared.
 * It does not support block scope {}.
 * it can be readeclared and reassigned
 * Variables declared with var are hoisted (moved to the top during execution)
 */
// Example of var
function textVar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x)
    }
    console.log(x)
}
textVar()


var weight = 40;
if (weight === 20) {
    console.log('i will take my self')
}
else {
    console.log('i will give to some one for take')
}



// 🔴 Problem:var does not respect block {} scope, so changing the value inside if affects the whole function.