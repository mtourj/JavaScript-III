/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding means that the 'this' keyword binds to the window object (also
    known as default binding)
* 2. Implicit binding means that the 'this' keyword binds implicitly (automatically)
to its variable object.
* 3. Explicit binding is when the 'this' keyword is explicitly assigned to an object
of the programmer's choice
* 4. New binding happens when a new object is created, and the 'this' keyword gets
assigned to that empty object before it is initialized.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
function test (){
    console.log(this.name);
}

const objTest = {
    name: "Mo Money",
    test: test
};

objTest.test();
// Principle 3

// code example for New Binding
function testFunc (){
    this.name = "Mo";
    this.speak = function (){
        return "My name is " + this.name;
    };
}

console.log(testFunc.name);
var testFuncTest = new testFunc ();
console.log(testFuncTest.name);

testFunc();

// Principle 4

// code example for Explicit Binding
function hello (){
    console.log(this.text);
}

let explicitExample = {
    text: "Test Text"
}

hello.call(explicitExample);