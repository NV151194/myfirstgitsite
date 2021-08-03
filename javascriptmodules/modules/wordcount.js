let str = "He's my king from this day until his last day";
 let count = 0;
 let pos = str.indexOf('a');
 while (pos !== -1) {
 count++;
 pos = str.indexOf('a', pos + 1);
 }
