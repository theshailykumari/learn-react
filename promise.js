//how to create promise
const myPromise= new Promise((resolve, reject) => {
    let sucess=true;
    if(sucess==true){
        resolve(console.log("promise resolve"))
    }
    else{
     reject(console.log("promise reject"))
    }
})
//coonsume promise
myPromise.then(()=>{
    resolve();
}).catch(()=>{
    reject();
}).finally(()=>{
    console.log()
})