//this refers to global object
//document key is head,body
var a=90;
let obj={
    name:'yash',
    city:'nYc',
    display:()=>{

        console.log(this.a); 
        return ;
    }
}
//arrow fucntion this  points to global object
//displayinfo:function () {
        
    //     console.log(this); 
    //     return this;       
    // },
    //here this points to 


// obj.display();

//tag name se array of elements aa jayenmge
let ans=document.getElementsByTagName('h1');
console.log(ans);
console.log(ans[0]);
// ans[1].innerHTML="Mithai"

function display() {
let ans=document.getElementsByTagName('h1');
ans[1].innerHTML="Mithai"   
}

// const btn=document.querySelector('.btn')

// btn.addEventListener('mouseover',()=>{
// let ans=document.getElementsByTagName('h1');
// ans[1].innerHTML="Hello Mithai"   
// })

const btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
let ans=document.getElementsByTagName('h1');
ans[1].innerHTML="Hello nODE"   
})

//list
//calci
//darktheme