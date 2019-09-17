/* Hoist the class */

// This code produces an error. So apparently, unlike functions,
// classes are not hoisted to the top of their scope. (They are block-scoped.)
//
// What could be the reason for this?

let s = new Something()

class Something {}

// Они "поднимаются", но не инициализируются.
// Все новые конструкции объявления (let, const, class), добавленные в ES6, не поднимаются

//Причина этого ограничения в том, что классы могут быть наследниками. Это поддерживается с помощью выражения «extends»,
// значение которого может быть произвольным. Это выражение должно быть установлено в определенном месте,
// которое не может быть поднято.