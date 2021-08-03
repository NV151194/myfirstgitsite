const isPrime = require('./isPrime.js');
const path = require('path');
const modInverse = require('./modInverse.js'); 
const fs =  require('fs');

 const  RSAKeyPair  = (p, q) => {
 if (! (isPrime(p) && isPrime(q)))
 return;
 if (p==q)
 return;
 let n = p * q,
 phi = (p-1)*(q-1),
 e = 5,
 d = modInverse(e,phi);
// Public key: [e,n], Private key: [d,n]
 return (`Public key: `+[e,n]+`,
Private key: `+[d,n]+`.`);
 }
 console.log(RSAKeyPair(5,11));
console.log(path.normalize('Nandan'));


