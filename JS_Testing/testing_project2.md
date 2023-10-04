# Testing
## Answered by Learners
* Creating Test Cases
* And to check wheather the program run on given test cases or not
* Selenium
# Purpose:
    * Testing is done to identify defects,errors or issues in software.
    * We are doing this because to ensure it works as indended.
## Answer by Learners
* Models can be failure.
* Risk of getting errors will increase
* Poor User Experiece
* Wasted Resources
* Increase cost
* Reputation Damage
* Lose the Trust on client/customers.
# Sharadha Kapse
* Samsung Phone
# Sahil
* They didn't adapt changes
# Gayatri
* Bug - Program is working unexpectedly
* Error - Some failure
# Aditi
* Error - Specific to certain line of code
## Bug and Error
* Bug - It is a problem or issues in computer program
* Example : 2+5=10
* Examples:
    - age>18 but developer has done age<18
    - glitches
* Unexptected Behaviour or unintented behaviour
# Error
* Error - Specific type of bug /mistake in the code that prevents working correctly.
* Error can cause system crash
* Example : 2 5
* Examples:
    - Missing semicolons
    - Run-Time Errors ( Divide by zero)
    - Logical Errors
        - Example : Add two numbers
                - 2 10
    - "two"+2
## JavaScript
* FrameWorks
    - Mocha
        - Testing Framework
        - JavaScript Testing Framework
* Java
    - Selenium
* Python
    - Selenium
* Mocha
    - It used for both
        - Front-End
            (JavaScript,HTML & CSS)
        - Back-End
            (Python(Django),Java etc)
Software Requirements
Node Software
* https://nodejs.org/en/download
* LTS - Long Term Support
C:\Users\Dell>node
Welcome to Node.js v18.17.0.
Type ".help" for more information.
## Checking node version
node -v
16+
## To install latest LTS(Long Term Support)
npm install --lts
## Open your terminal and navigate to the project directory
- And type this command
    - npm init -y
    - To create a package.json
# What is JSON?
* JavaScript Object Notation
* Priyanshu
    - It is used to store the data
* It is very very lightweight for data-interchange
* Commonly used for
    - Data Storage and communication between software systems.
* Syntax:
    - key value pair - {}
    - arrays - []
* Data types:
    - Everything that js supports (Rahul)
## Install Mocha And Chai
* npm install mocha chai --save-dev
## Next
Create src/addition.js file
```
function add(a,b){
    return a+b;
}
module.exports = add;
```
* Update the package.json file
```
"scripts": {
    "test": "mocha test/*.test.js"
  },
```
```
npm test
```
## Folder_Structure
/Project
    /src
    --addition.js
    /test
    --addition.test.js
    package.json
    package-lock.json
    node_modules
/ - Directory/Folder
```javascript
const assert=require('assert');
it('should return true',()=>{
    assert.strictEqual('hello',);
});
```
* assert - library & variable
    - It will make assertions in our testes
*  require() function
    - To include external modules or files.
    - It will import other pieces of code that you want to use in program.
* strictEqual(true,true);
    - One function provided by assert modules.
    - It will assert that two values are strictly equal to each other.
## Basic Assertion
assert.strictEqual('hello',);
## Equality Check
assert.equal(5,5)
##
assert.include('hello world','hello')
##
assert.include('ram@gmail.com','@gmail.com')
##
assert.property({name:'John'},'name')
##
assert.isNull(null)
##
assert.include('[1,2,3]',2)
##
assert.typeOf('2',2) - false
##
assert.isEmpty([])
## Greater Than
assert.isAbove(10,5)
## Lesser Than
assert.isBelow(10,5)
## Deep Equal
* It will check equality of objects.
## Task
Positive Number Check
assert.isAbove(10,0)
Negative Number Check
assert.isBelow(10,0) - false
assert.isBelow(-10,0) - true
## Infinte number check
assert.isFinite(42)