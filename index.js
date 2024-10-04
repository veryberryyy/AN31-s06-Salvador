/*

	Functions
		- in JS, are lines/block of codes that tells our device/application to perform certain task when called/invoked

		- are mostly created to create complicated task to run several lines of code in succession

		- they are also used to present repeating lines/block of codes that perform the same task/function

	Function Declaration
		- (function statement) defines a function with the specified parameters

		syntax:
			function functionName(){
				code block (statement)
			}

			- function keyword
				- used to define a js function

			- functionName
				- the function name, functions are name to be able to use later in the code

			- function block(){}
				- the statement which compromise the body of the function
			

*/

function printName(){
	console.log('My name is Bean');

}

printName();

/*
	Function Invocation
		- the block and statements inside a function is not immediately executed when the function is defined
		- it is common to use the term 'call a function' instead of 'invoke a function'



	Function Declaration
		- can be created through function declaration by using the function keyword and adding a function

		- declaredFunction() can be hoisted as long

			- hoisted 
				- can go to the top of the code, and can be used even before it is declared


*/

function declareFunction(){
	console.log('Hello Bianca from declaredFunction')

}

/*

	Function Declaration vs Expression

		- function expresion
			- a function can also be stored in a variable. this is called function expression
			- a function expression is a anonymous function assigned to the variableName

			- anonymous function - function without a name

*/

let variableFunction = function(){
	console.log('Hello again, Bean');
}

variableFunction();

let funcExpresion = function funcName(){
	console.log('Hello again and again, Bean');
}

funcExpresion();

/*

	Function Scoping

		scope
			- is the accessibility(visibility) of variables within out program

			JS variables has 3 types of scope:

				1. local/block scope
				2. global scope
				3. function scope

*/

{
	let localVar = "Beanie";
	console.log(localVar);
}
	let globalVar = "Tiabeanie";


	console.log(globalVar);
	/*console.log(localVar); // result in error, localVar, being in a block, cannot be accessed outside of its code block*/


/*

	Function Scope
		- JS has function scope: each function creates a new scope. variables defined inside a function are not accessible (visible) from outside the function. variables declared with: 'var', let', and 'const' are quite similar when declared inside a function

*/

function showNames(){

	//function scope variables:

		var functionVar = "Lorence";
		const functionConst = "Daniel";
		let functionLet = "Anadon";

		console.log(functionVar);
		console.log(functionConst);
		console.log(functionLet);
}

showNames();