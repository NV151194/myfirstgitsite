const isEquivalent = (a, b) => {
 // arrays of property names
 let aProps =
Object.getOwnPropertyNames(a);
 let bProps =
Object.getOwnPropertyNames(b);

 // If their property lengths are
//different, they are different objects
 if (aProps.length != bProps.length) {
 return false;
 }

 for (let i = 0; i < aProps.length; i++)
{
 let propName = aProps[i];

 // If the values of the property are
//different, not equal
 if (a[propName] !== b[propName]) {
 return false;
 }
 }

 // If everything matched, correct
 return true;
 }
 //console.log(isEquivalent({'hi':11},{'hi':12}));
module.exports = isEquivalent ; 