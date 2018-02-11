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
        map: f => Right(f(x)),
        fold: (f, g) => g(x),
        inspect: function () {
            console.log(`Right(${x})`);
            return this;
        }
    })

const Left = x =>
    ({
        map: f => Left(x),
        fold: (f, g) => f(x),
        inspect: function () {
            console.log(`Left(${x})`);
            return this;
        }
    })

const fromNullable = x =>
    x != null ? Right(x) : Left(null)

const findColor = name =>
    fromNullable({
        red: '#ff4444',
        blue: '#3b5998',
        yellow: '#fff68f'
    }[name])

const resGood = findColor('red')
    .inspect()
    .map(c => c.slice(1))
    .inspect()
    .map(c => c.toUpperCase())
    .inspect()
    .fold(e => 'no color',
        x => x
    )

console.log(resGood)

const resBad = findColor('notexistColorXSXSXS')
    .inspect()
    .map(c => c.slice(1))
    .inspect()
    .map(c => c.toUpperCase())
    .inspect()
    .fold(e => 'no color',
        x => x
    )

console.log(resBad)
