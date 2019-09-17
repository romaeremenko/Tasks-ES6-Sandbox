/* Fake point */

//Use a single object literal to create an object that is indistinguishable
// from a Point instance, without calling the Point constructor.

// class Point {
//     constructor(x, y) {
//         this.x = x, this.y = y
//     }
//     add(other) {
//         return new Point(this.x + other.x, this.y + other.y)
//     }
// }
//
// var fakePoint = YOUR_CODE_HERE
// console.log(fakePoint instanceof Point)

class Point {
    constructor(x, y) {
        this.x = x, this.y = y
    }
    add(other) {
        return new Point(this.x + other.x, this.y + other.y)
    }
}

var fakePoint = Object.create(Point.prototype);
console.log(fakePoint instanceof Point)