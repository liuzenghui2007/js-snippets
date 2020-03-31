const util = require('util');
const fs = require('fs');
 
// 返回一个文件的详细信息
const stat = util.promisify(fs.stat);
// promise用法
stat('.')
 .then((stats) => {
  // Do something with `stats`
  console.log('then res= ', stats)
 })
 .catch((error) => {
  // Handle the error.
  console.log('catch err= ', error)
 });

//  async用法,async返回一个promise?
async function readStats(dir) {
 try {
  let stats = await stat(dir);
  // Do something with `stats`
  console.log('try res=', stats)
 } catch (err) { // Handle the error.
  console.log('catch err', err);
 }
}
readStats('.');
// 使用promisify封装readFile
const readFileAsync = util.promisify(fs.readFile);
const filePath = './README.md';
async function main() {
    try {
        const text = await readFileAsync(filePath, {encoding: 'utf8'});
        console.log('CONTENT:', text);
    }
    catch (err) {
        console.log('ERROR:', err);
    }
}
main()