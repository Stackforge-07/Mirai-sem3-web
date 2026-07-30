const btn=document.querySelector('#toggle')
const bdy=document.querySelector('body');
let i=0;
btn.addEventListener('click',()=>{
    i++;
    if(i%2==1){
    btn.innerHTML='ON';
    bdy.style.backgroundColor='black'
    

    }
    else{
        btn.innerHTML='OFF';
        bdy.style.backgroundColor='white';
    }
   

})