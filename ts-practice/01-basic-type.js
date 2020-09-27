/* Boolean */
var isDone = false;
/* Number */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
/* String */
var color = 'blue';
var sententce = "Hello, " + color;
/* Array */
var list = [1, 2, 3];
var arr = [1, 2, 3];
/* Tuple */
var x = ['str', 1];
// let y: [string, number] = [1, 'str'];
// x[2] = 'x';
/* Enum */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
var colorName = Color[4]; // Tips: 对对象的属性赋值会返回改值
/* Unknown */
var notSure = 4;
notSure = 'Maybe a string instead';
notSure = false;
// const aNumber: number = maybe;
if (maybe === true) {
    // const aBoolean: boolean = maybe;
    // const aString: string = maybe;
}
if (typeof maybe === 'string') {
    var aString = maybe;
}
var str = getValue('myString');
var looselyTyped = 4;
looselyTyped.a;
looselyTyped.b();
var d = looselyTyped.a.b.c.d;
/* Void: the opposite of Any, the absence of having any type at all. */
function warnUser() {
    console.log('warn');
    return;
}
/* Null and Undefined */
/* use --strictNullChecks when possible */
var u = undefined;
var n = null;
var t = null; // Tips: By default null and undefined are subtypes of all other types.
/* Never */
/* represent that the type of values that never occur */
function error(message) {
    throw new Error("fuck you, " + message + ".");
}
function fail() {
    return error('John');
}
create({});
create(null);
/* Type Assertions */
var someValue = 'this is a string.';
var strLength1 = someValue.length;
var strLength2 = someValue.length;
function reverse(s) {
    return s.split('').reverse().join('');
}
console.log(reverse('hello world'));
