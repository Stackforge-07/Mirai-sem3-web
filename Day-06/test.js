let bond={
    name:'james',
    display:()=>{
        console.log(this);
        
    }
}

let jamii={
    name:'jamii',
    displaynew() {
         console.log(this);
    }
}
let obj1={
    name:'ysh',
    age:30,
    paymentdone:false
}
//NORMAL fucn allow apply but not the arrow fucntion
jamii.displaynew.apply(obj1)