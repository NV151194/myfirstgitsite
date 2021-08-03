import { fetch } from './data.js';

const value = fetch.Mintopic.pop(fetch.Mintopic.index + 1).pop();
const valuelength = value.length;
console.log(valuelength);
const values = () => {
    for (var i = 0; i < valuelength; i++) {
        //    for (var j = 0; j < valuelength; j++) {
        console.log(value[i]);
    }
    //}
};
values();