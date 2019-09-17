/* Precedence */

//Where does an arrow function end? At a closing bracket or semicolon, of course.
// But does a comma denote the end? Is the body of the function in this example x + y, 0, or just x + y?
//
// Is there anything else that will end an arrow function body? Experiment.

//console.log([1, 2, 3].reduce((x, y) => x + y, 0));


// В примере ф-ция принимает два аргумента в reduce => array.reduce(callback[, initialValue])
// Первый аргумент это callback-функция, а после - initialValue, передаётся в качестве
// первого аргумента при первом вызове функции callback (число, с которого будет начинать вычисляться сумма.)
