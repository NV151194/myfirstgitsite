/*String Shortening
For the shortening part, the following algorithm can be used. There
are 62 possible letters and numbers, consisting of 26 lowercase letters,
26 uppercase letters, and 10 numbers (0 to 9).*/


let DICTIONARY ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" .split('');

module.exports.encodeId = (num) => {
 let base = DICTIONARY.length;
 let encoded = '' ;
if (num === 0 ) {
 return DICTIONARY[0 ];}
 while (num > 0 ) {
 encoded += DICTIONARY[(num % base)];
 num = Math .floor(num/ base);}
 return reverseWord(encoded);
 }

module.exports.reverseWord = (str) => {
 let reversed = "" ;
 for (let i = str.length - 1 ; i >= 0 ; i-- ) {
 reversed += str.charAt(i);
 }
 return reversed;
 }

 module.exports.decodeId = (id) => {
 let base = DICTIONARY.length;
 let decoded = 0 ;
for (let index = 0 ; index < id.split("" ).length; index++ ) {
 decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
 }
return decoded;
}
/* console.log(encodeId(11231230 )); 
 // prints 'VhU2'
 console.log(decodeId('VhU2' )); 
 // prints '11231230'*/
