function Box (x) {
    return    ({
        chain: f => f(x),
        map: f => Box(f(x)),
        fold: f => f(x),
        inspect: function () {
            console.log(`Box(${x})`);
            return this;
        }
    });
}
 
Box.of = (x) => Box(x)

const join = m =>
    m.chain(x => x)

/* Monads
   join(m.map(join)) == join(join(m)
    join(Box.of(m) == join(m.map(Box.of))
*/


//join(m.map(join)) == join(join(m)
const m = Box(Box(Box(3)))

const res1 = join(m.map(join))
const res2 = join(join(m))

console.log(res1,res2);


//join(Box.of(m) == join(m.map(Box.of))

const mo = Box('wonder')

const res3 = join(Box.of(mo))
const res4 = join(mo.map(Box.of))

console.log(res3,res4);