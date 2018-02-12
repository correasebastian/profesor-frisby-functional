const LazyBox = g =>
    ({
        fold: f => f(g()),
        map: f => LazyBox(() => f(g())),
        inspect: function () {
            console.log('***************');
            console.log(g());
            return this;
        }
    })


    let a = 'a'
    let t = 't'
    let n = 'n'
    let v = 'v'
    let z = 'z'

const result = LazyBox(() => '  64 ')
    .inspect()
    .map(abba =>  console.log(a+=1) ||  abba.trim())
    .inspect()
    .map(trimmed => console.log(t+=1) || new Number(trimmed))
    .inspect()
    .map(number => console.log(n+=1) || number + 1)
    .inspect()
    .map(x => console.log(v+=1) || String.fromCharCode(x))
    .inspect()
   .fold(x => console.log(z+=1) || x.toLowerCase())

console.log(result)
