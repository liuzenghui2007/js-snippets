const util = require('util');
const fs = require('fs');

// 只要符合 Node.js 的回调风格，所有函数都可以这样转换。也就是说，只要满足下面两个条件，无论是不是原生方法，都可以：

// 最后一个参数是回调函数
// 回调函数的参数为 (err, result)，前面是可能的错误，后面是正常的结果
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
console.log('next ---')

// 对于非 Node.js 标准风格的函数，也提供自定义转换函数的功能。