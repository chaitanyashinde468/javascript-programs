/**
 * Topic: Polyfills
 */


/*----------------------------------------------------
Example 1 : Custom Array Includes Polyfill
----------------------------------------------------*/

Array.prototype.myIncludes = function(value) {

    for(let i = 0; i < this.length; i++) {

        if(this[i] === value) {

            return true;

        }

    }

    return false;

};

const numbers = [1, 2, 3, 4];

console.log(
    numbers.myIncludes(3)
);

/*
Output

true
*/


/*----------------------------------------------------
Example 2 : Custom Map Polyfill
----------------------------------------------------*/

Array.prototype.myMap = function(callback) {

    const result = [];

    for(let i = 0; i < this.length; i++) {

        result.push(
            callback(this[i], i, this)
        );

    }

    return result;

};

const data = [1, 2, 3];

const output = data.myMap((item) => {

    return item * 2;

});

console.log(output);

/*
Output

[2,4,6]
*/


/*----------------------------------------------------
Example 3 : Custom Filter Polyfill
----------------------------------------------------*/

Array.prototype.myFilter = function(callback) {

    const result = [];

    for(let i = 0; i < this.length; i++) {

        if(callback(this[i])) {

            result.push(this[i]);

        }

    }

    return result;

};

const values = [1,2,3,4,5];

console.log(

    values.myFilter((item) => item > 3)

);

/*
Output

[4,5]
*/
