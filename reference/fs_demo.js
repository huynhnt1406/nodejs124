const fs = require('fs');
const path = require('path');


//create folder


/*fs.mkdir(path.join(__dirname,'/test',),{},err => {
    if(err) throw err;
    console.log('folder created')
})*/
//create and write to file

/*fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World',err => {
    if(err) throw err;
    console.log('file written to.....');
})


fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love Node JS',err => {
    if(err) throw err;
    console.log('file appended to.....');
})*/



//READ FILE

/*fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
    if(err) throw err;
    console.log(data)
})*/


//RENAME FILE

fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','HelloWorld.txt'),err => {
    if(err) throw err;
    console.log('file renamed... ')
})