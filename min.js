/**
 * In this section we are looking about return() method that ends  the sequence in a paused generator as soon as they are calledz
 */
function *getFruilts(){
    yield 'Apple';
    yield 'mango';
    yield 'Banana';
    yield 'powpow'
}
// create a iterator 
const frult = getFruilts()

console.log(frult.next())
console.log(frult.next())
console.log(frult.return('Sweet'));
console.log(frult.next())
console.log(frult.return('car'));
console.log(frult.next())
console.log(frult.next())
console.log(frult.next())
