// node 中没有实现 fetch，你可以使用 node-fetch，使得在 node 中也可以使用 fetch.
// Accessing Headers and other Meta data
const fetch = require('node-fetch')

fetch('https://github.com/')
    .then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers.raw().length);
        console.log(res.headers.get('content-type'));
    });

// Extract Set-Cookie Header
// fetch(url).then(res => {
//     // returns an array of values, instead of a string of comma-separated values
//     console.log(res.headers.raw()['set-cookie']);
// });

// Post data using a file stream
const { createReadStream } = require('fs');
const stream = createReadStream('./README.md');
fetch('https://httpbin.org/post', { method: 'POST', body: stream })
    .then(res => res.json())
    .then(json => console.log(json));

// Post with form-data (detect multipart)
// OR, using custom headers
// NOTE: getHeaders() is non-standard API
const FormData = require('form-data');
const form = new FormData();
form.append('a', 1);
const options = {
    method: 'POST',
    body: form,
    headers: form.getHeaders()
}
fetch('https://httpbin.org/post', options)
    .then(res => res.json())
    .then(json => console.log(json));