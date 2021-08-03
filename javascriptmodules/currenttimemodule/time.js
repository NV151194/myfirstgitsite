//const time = () => {}
let today = new Date();
 today =  today.toLocaleString()
 .split(',')
 .pop()
 .split(' ')
 .filter(element => element !== '' )
 .shift();
 // const matchtime  = new Date(((86400000/24)*16)+((86400000/(24*60)))); 
  
  console.log(today);
 // console.log(matchtime);


// today.pop();