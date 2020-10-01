/* first case */
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function printLabel02(labelObj) {
    console.log(labelObj.label);
}
printLabel02(myObj);
