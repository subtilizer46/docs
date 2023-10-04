
# Example:
let a;

# Example:
var b;

# Example:
const c;


## What are let,var and const?
- keywords

let age = 30;
age = 40;
console.log(age)

* Reinitilize the variable

const age = 30;
age = 40;
console.log(age)

* Error
* Reinitilize is not possible

var age = 30;
age = 50;
console.log(age)


## Difference

1. let
- Reassigned ✔
- Re-Declared ✖
- Can be access outside block ✖
- Block Scope
    - We can only access within block

2. var
- Reassigned ✔
- Re-Declared ✔
- Can be access outside block ✔

3. const
- Reassigned ✖
- Re-Declared ✖
- Can be access outside block ✖