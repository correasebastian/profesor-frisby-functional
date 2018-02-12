const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        inspect: function () {
            console.log(`Box(${x})`);
            return this;
        }
    })
const Right = x =>
    ({
        chain: f => f(x),
        map: f => Right(f(x)),
        fold: (f, g) => g(x),
        inspect: function () {
            console.log(`Right(${x})`);
            return this;
        }
    })

const Left = x =>
    ({
        chain: f => f(x),
        map: f => Left(x),
        fold: (f, g) => f(x),
        inspect: function () {
            console.log(`Left(${x})`);
            return this;
        }
    })

const fromNullable = x =>
    x != null ? Right(x) : Left(null)


const tryCatch = f => {
    try {
        return Right(f())
    } catch (e) {
        return Left(e)
    }
}

/////

const Sum = x =>
({
  x,
  concat: ({x: y}) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`,
  toString: () =>
    `Sum(${x})`
})

const resSum = Sum(1).concat(Sum(2))

console.log(resSum);


const All = x =>
({
  x,
  concat: ({x: y}) =>
    All(x && y),
  inspect: () =>
    `All(${x})`,
  toString: () =>
    `All(${x})`
})

const resAll = All(false).concat(All(true))

console.log(resAll);

const First = x =>
({
  concat: _ =>
    First(x),
  inspect: () =>
    `First(${x})`,
  toString: () =>
    `First(${x})`
})

const res = First("blah").concat(First("ice cream")).concat(First('meta programming'))
console.log(res)
