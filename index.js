const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        inspect: function () {
            console.log(`Box(${x})`);
            return this;
        }
    })

/* functors
    fx.map(f).map(g) == fx.map(x => g(f(x)))
    fx.map(id) == id(fx)

*/


 // fx.map(f).map(g) == fx.map(x => g(f(x)))
const res1 = Box('squirrels')
    .map(s => s.substr(5))
    .map(s => s.toUpperCase())
console.log(res1)

const res2 = Box('squirrels')
    .map(s => s.substr(5).toUpperCase())

console.log(res2)


// fx.map(id) == id(fx)

const id = x => x

const res3 = Box('crayons').map(id)
const res4 = id(Box('crayons'))

console.log(res3)
console.log(res4)