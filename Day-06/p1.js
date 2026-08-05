let x=new Promise((resolve, reject) => {
    let ans=true;

    if(ans) resolve("Payment completed")
    else reject("Payment nii mila")
    
})
console.log(x);
console.log(typeof(x));

//.then se consume karte hai
x.then((data)=>{
    console.log(data);
})
//.catch se error lete hai ya reject lega promise ka
.catch((error)=>{
    console.log(error);
    
})

