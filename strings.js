let str1 = 'This is the first string'
let str2 = 'And the second string is this one'
let str3 = 'second'

console.log(str1);
console.log(str2);
console.log('This is str3:', str3)
console.log();
console.log('concantemated:', str1 + ' ' + str2);
console.log('Does str2 includes str1?', str2.includes( str1));
console.log('Does str2 includes str3?',str2.includes(str3));

let waffles = 'This is another string called waffles'
console.log("waffles' length is :" , waffles.length);
console.log('waffles upper case is:'  , waffles.toUpperCase);
console.log('waffles lower case is:' , waffles.toLowerCase);
console.log('1st character is:' , waffles.charAt(0));
console.log('2nd character is:' , waffles.charAt(1));
console.log('last character:', waffles.charAt(waffles.length -1 ));
let k=12
console.log('k is equal to', k);
console.log('character at k:', waffles.charAt(k));
waffles = waffles + 'a';
console.log(waffles);
let name = 'christos'
let age = 19

if (name === 'christos'){
  console.log(`Hello ${name}, you are the most awesome ${age} old person I know!!!`);
}
