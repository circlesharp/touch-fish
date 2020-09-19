const car = { brand: 'Ford', modal: 'Fiesta' };

/*
:::module.exports:::
exposes the object it points to
*/
module.exports = car; // { brand: 'Ford', modal: 'Fiesta' }

/*
:::exports:::
exposes the properties of the object it points to

illegal: `exports = car;`
*/
exports.car = car; // { car: { brand: 'Ford', modal: 'Fiesta' } }