/*
::: Enums :::

Enums allow a developer to define a set of named constants.

TS provides both numeric and string-based enums.
*/
/* ::: Numeric enums ::: */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
function test(direction) { }
test(Direction.Up);
/*
::: String enums :::

In a string enums, each member has to be constant-initialized
with a string literal, or with another string enum member.

Don't have auto-incrementing behavior
*/
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
/*
::: Heterogeneous enums :::

enums can be mixed with string and numeric members.
*/
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
/* ::: Computed and constant members :::*/
var A;
(function (A) {
    A[A["x"] = 0] = "x"; // E.x is constant
})(A || (A = {}));
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 8] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 10] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = '123'.length] = "G";
})(FileAccess || (FileAccess = {}));
/*
::: Union enums and enum member types :::

When all members in an enum have literal enum values:
1. enum members also become types as well;
2. enum types themselves effectively become a union of each enum member.
*/
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Circle,
    radius: 100
};
function f(x) {
    // if (x !== ShapeKind.Circle || x !== ShapeKind.Square) {} // fuck!
}
/*
::: Enums at runtime :::

Enums are real objects that exist at runtime.
*/
var alphabet;
(function (alphabet) {
    alphabet[alphabet["a"] = 0] = "a";
    alphabet[alphabet["b"] = 1] = "b";
    alphabet[alphabet["c"] = 2] = "c";
})(alphabet || (alphabet = {}));
function fun(obj) {
    return obj;
}
fun(alphabet); // { '0': 'a', '1': 'b', '2': 'c', a: 0, b: 1, c: 2 }
/*
::: Enums at compile time :::

Use keyof typeof to get a Type that represents all Enums keys as strings.
*/
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
// printImportant(LogLevel.WARN, 'e')
printImportant('ERROR', 'error message example.'); // 很牛逼，请注意使用上的区别
var directions = [
    0 /* Up */,
    1 /* Down */,
];
