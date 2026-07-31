// window.alert("Hacked Success")
// let person=window.confirm("Cnfrm chal raha hai")
// console.log(person);

let btn=document.querySelector("button")
btn.addEventListener('click',()=>{
    window.open("https://www.codechef.com/problems/PRDEXC")
})

console.log("Before Promise");


setTimeout(() => {
    console.log("First micro task");
    
    
}, 1000);
let p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolved")
    }, 2000);
})
p1.then((value)=>{
    console.log(value);  
}).catch((error)=>{
    console.log(error);
    
})
console.log("After promise");
