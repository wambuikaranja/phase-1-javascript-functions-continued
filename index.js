// code your solution here
//function declaration
function saturdayFun (activity='roller-skate') {
    return 'This Saturday, I want to ' + activity + '!'

}
saturdayFun('Go for a facial');

//function expression
let mondayWork = function(task = 'go to the office') {
    return 'This Monday, I will ' + task + '.'

}
console.log(mondayWork ('attend the Microsoft Campus Tour'))

//function-level-scope
function wrapAdjective (visualFlair = '*') {
    const innerFunction = function (p = 'Special') {
        return 'You are' + p ;
    }
    return innerFunction;
}
