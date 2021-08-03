var spawn = require("child_process").spawn,child;
child = spawn("powershell.exe",[``]);
child.stdout.on("data",function(data){
    console.log("Powershell Data: " + data);
});
child.stderr.on("data",function(data){
    //console.log("Powershell Errors: " + data);
});
child.on("exit",function(){
   // console.log("Powershell Script finished");
});
child.stdin.end(`write-output "<p>hello<p>" | Out-File "process.txt" `);


