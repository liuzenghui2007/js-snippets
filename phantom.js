// node script
// 使用phantom实现的pageTopdf
// https://www.npmjs.com/package/phantom
// This package has been deprecated
phantom = require('phantom')
util = require('util')
sleep = util.promisify(setTimeout)
const pageToPdf = async (url, i) => {
  let ph = await phantom.create()
  let page = await ph.createPage()
  // await page.property('viewportSize', { width: 1024, height: 768 });
  await page.property('pageSize', 'A4');
  let status = await page.open(url)

  console.log('status', status)
  await sleep(5000)
  let result =await page.render(`${i}.pdf`)
  console.log('转化结果=', result)
}
// pageToPdf('https://www.tongbanjie.com');
// 在chrome console中await是可以单独使用的，在node中不可以
const main = async ()=> {
  for (let i in Array(2).fill(1)) {
    console.log(i)
    try {
      let r =  await pageToPdf('https://www.beijingpulsetech.net:448/#/report-pulses/bbf2a161-dfd0-4326-8a4f-c6d1b94f0736', i)
    }
    catch (err) {
      console.log('转化失败rej =', err)
    }
  }
}

main()
