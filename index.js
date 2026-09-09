let num=[1,2,3,4,5];
// let num2= [];
// for(let i=0;i<num.length; i++){
//     num2.push(num[i]*2)
// }
// let num2= num.map((ele)=> ele= ele*2)
// console.log(num2);
// let num3= num.map((i)=> i= i*3)

//even no. 
// let filter_ele=num.filter((u)=> u=u%2==0)
// console.log(filter_ele);

//global execution context
//microsoft queue
//first GEC is in stack after completion of whole code callback goes to stack
//callback first goes to queue then stack
//api
//fetch
// setTimeout(()=>{
//     console.log("hi there from settimeout")
// },5000)
// console.log("i am at the bottom")


//promise: .then(run when promise is fullfield),.catch() ,.finally
// let res= fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{

//     console.log(data);
// })
//console.log(res)

// //how to create promise
// const myPromise= new Promise((resolve, reject) => {
//     let sucess=true;
//     if(sucess==true){
//         resolve(console.log("promise resolve"))
//     }
//     else{
//      reject(console.log("promise reject"))
//     }
// })
// //coonsume promise
// myPromise.then(()=>{
//     resolve();
// }).catch(()=>{
//     reject();
// })}).finally(()=>{
    //console.log()
//})

// let data = await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(data);

async function promiseResolver() {
    data =await fetch(""https://jsonplaceholder.typicode.com/posts"")
        console.log(data)
    
}
promiseResolver();