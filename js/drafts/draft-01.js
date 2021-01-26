const Manager = function(name, sales) {
  this.name = name
  this.sales = sales
}

Manager.prototype.sell = function() {
  this.sales += 1
}

console.dir(Manager)

const mango = new Manager('Mango', 5)
console.log(mango)
mango.sell()
console.log(mango)

const poly = new Manager('Poly', 10)
console.log(poly)
poly.sell()
console.log(poly)

console.log(poly.hasOwnProperty('y'))