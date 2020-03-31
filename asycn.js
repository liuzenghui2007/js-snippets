// chrome console script
// fetch是个典型的Promsie
// 以下代码都可以在chrome控制台中执行
fetch('/').then(res=>res.text()).then(data=>console.log(data.length))

// setTimeout是典型的异步函数，使用一个回调函数作为参数
// 这里会返回一个正整数，表示定时器的编号
setTimeout(
    function () {
        console.log('123')
    },
    1000   
)
// 封装成Promise,这个promise内部有一个异步函数，
// 如果rnd大于0.5则resolve(rnd)，否则reject(rnd)
// 执行的promise要有then和catch
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let rnd = Math.random()
        if(rnd > 0.5)
            resolve(rnd)
        else
            reject(rnd)
    }, 1000)
})
.then(res=>console.log('resolve=', res))
.catch(err=>console.log('reject=', err))

// 一个new Promise是一个立即执行的函数，
// 我们把它再次封装成可以随时执行的函数，只需要用普通函数包裹即可
// 不立刻执行的promise，不需要then和catch，在调用的时候加上即可
let p1 = ()=> new Promise((res,rej)=>    
        setTimeout(()=>{
            let rnd = Math.random()
            if(rnd > 0.5)
                res(rnd)
            else
                rej(rnd)
        }, 1000)
    )
// async/await 是Promise的语法糖
// await 后面接的是Promise的调用
// await 拿到的是resolve的数据，也就是传给then的数据
// reject的数据需要try...catch
// catch的err是try中所有的await的错误
let q1 = async ()=>{
    try {
        let res = await p1()
        console.log('await res=', res)
    }
    catch(err) {
        console.warn('await rej=', err)
    }
}

// async函数不带await执行，相当于同步函数
for(let i = 0; i<10; i++) {
    q1()
}
// async函数带await执行，才是同步方式写异步
for(let i = 0; i<10; i++) {
    await q1()
}

// 后记： 
// 其实，new Promise里放同步函数异步函数都可以，不过同步就没必要用Promise