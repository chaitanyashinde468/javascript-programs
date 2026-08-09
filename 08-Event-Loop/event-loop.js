/**
 * Topic: Event Loop
 * Description: Understanding JavaScript execution order.
 */

/*----------------------------------------------------
Example 1
----------------------------------------------------*/

console.log("Start");

console.log("Middle");

console.log("End");

/*
Output

Start
Middle
End
*/


/*----------------------------------------------------
Example 2
----------------------------------------------------*/

console.log("Start");

setTimeout(() => {

    console.log("Timeout");

}, 0);

console.log("End");

/*
Output

Start
End
Timeout
*/


/*----------------------------------------------------
Example 3
----------------------------------------------------*/

console.log("A");

setTimeout(() => {

    console.log("B");

}, 1000);

console.log("C");

/*
Output

A
C
B
*/
