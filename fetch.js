// node 中没有实现 fetch，你可以使用 node-fetch，使得在 node 中也可以使用 fetch.

const fetch = require('node-fetch')

fetch('https://github.com/')
    .then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers.raw());
        console.log(res.headers.get('content-type'));
    });