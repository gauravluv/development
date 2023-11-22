
console.log("hello world");

//  Aysnc,Await,promise,callback 

let datas=[
    {name:"prince",age:18},
    {name:"gaurav",age:22}
];


function getdatas(){
    setTimeout(() => {
        let output="";
        datas.forEach((data,index)=>{
            console.log(data.name);
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML=output
    }, 1000);
}

// function createdata(newdata,callback){

//     setTimeout(() => {
//         datas.push(newdata);
//         callback();
//     },2000);

// }

// callback function
  
// createdata({name:"adarsh",age:20},getdatas);
// getdatas();





function createdata(newdata){

   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        datas.push(newdata);
         let error=false;
         if(!error){    
             resolve();
         }else{
            reject("get error");
         } 
          
    },2000);
   });
     
     

}
// promise 
// createdata({name:"adarsh",age:20}).then(getdatas).catch(err => console.log(err));
// getdatas();


// Async and Await

async function start(){
    await createdata({name:"adarsh",age:20});
    getdatas();
}


start();



