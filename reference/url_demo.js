const url = require('url')
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');
//Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());
//HOST (root domain)
console.log(myUrl.host);
//HOSTNAME (does not get port)
console.log(myUrl.hostname);
//pathname
console.log(myUrl.pathname)
//SERIALIZED query
console.log(myUrl.search)
//Param object
console.log(myUrl.searchParams)
//Add params
myUrl.searchParams.append('id','30');
console.log(myUrl.searchParams)
//loop through params
myUrl.searchParams.forEach((value,name)=> console.log(`${value} : ${name}`))
console.log(myUrl.searchParams)
