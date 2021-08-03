const  modInverse  = (e, phi) => {
 var m0 = phi, t, q;
 var x0 = 0, x1 = 1;

 if (phi == 1)
 return 0;

 while (e > 1) {
 // q is quotient
 q = Math.floor(e / phi);

 t = phi;

 // phi is remainder now, process same as
 // Euclid's algo
 phi = e % phi, e = t;

 t = x0;

 x0 = x1 - q * x0;

 x1 = t;
 }

 // Make x1 positive
 if (x1 < 0)
 x1 += m0;

 return x1;
 }
  module.exports = modInverse ;
