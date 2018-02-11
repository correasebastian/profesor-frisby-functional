const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: function() {
    console.log(`Box(${x})`);   
    return this; 
    } 
})

const nextCharForNumberString = str =>
  Box(str)
  .inspect()
  .map(s => s.trim())
  .inspect()
  .map(r => parseInt(r))
  .inspect()
  .map(i => i + 1)
  .inspect()
  .map(i => String.fromCharCode(i))
  .inspect()
  .fold(c => c.toLowerCase())

const result = nextCharForNumberString('  64 ')

console.log(result)