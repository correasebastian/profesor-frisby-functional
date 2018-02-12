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

/////


const fs = {
    readFileSync: name => {
        if (name === 'config.json') {
            return JSON.stringify({
                port: 8888
            })
        } else {
            throw ('missing file!')
        }
    }
}


const tryCatch = f => {
    try {
        return Right(f())
    } catch (e) {
        return Left(e)
    }
}

const getPort = () =>
    tryCatch(() => fs.readFileSync('config.json'))
    .inspect()
    .chain(c =>
        tryCatch(() => JSON.parse(c))
        .inspect()
    )
    .inspect()
    .fold(e => 3000, c => c.port)

const result = getPort()

console.log(result)
