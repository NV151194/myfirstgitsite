//require node modules
const {execSync} = require('child_process');

const calculateSizeD = itemFullStaticPath => {
    //escape spaces, tabs, etc
    const itemFullStaticPathCleaned = itemFullStaticPath.replace(/\s/g, '\ ');
    
    const commandOutput = execSync(`dir "${itemFullStaticPathCleaned}" /s`).toString();
    
    //remove spaces, tabs, etc
    let filesize = commandOutput.replace(/\s/g, '');
    
    //split filesize using the '/' separator
    filesize = filesize.split('TotalFilesListed:');
    filesize = filesize.slice(1);
    filesize = filesize.pop();
    filesize = filesize.split('(s)');
    filesize = filesize.slice(1,2);
    filesize = filesize.pop();
    filesize = filesize.split('b');
    filesize = filesize.shift();

     const filesizeBytes = filesize.replace(/\W/g, '');
    //console.log(filesizeBytes);


 const units = ['B','KB','MB','GB'];

    //......1000......100000.......1000000000
    //log10
    //......3.........6.............9........
    //log10(filesize)/3
    //0......1.........2.............3........

    const index = Math.floor(Math.log10(filesizeBytes)/3);

    //700 -> 700/1000^0
    //10000->10000/1000^1
    //10000000->10000/1000^2
    const filesizeHuman = (filesizeBytes/Math.pow(1000,index)).toFixed(1);
   const unit = units[index];   
    filesize = `${filesizeHuman} ${unit}`;
    //console.log(filesize);
    
    return [filesize, filesizeBytes];
};

module.exports = calculateSizeD;