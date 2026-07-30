const adbtn=document.querySelector('#ad')
const task=document.querySelector('.task-list')
const add=document.querySelector('.input-box')
const write=document.querySelector('#write')



adbtn.addEventListener('click',()=>{
    const li = document.createElement('li');
     li.innerText = write.value; 
    
    task.appendChild(li)
    write.value = ""; 



})

const rmv=document.querySelector('#rmv')
rmv.addEventListener('click',()=>{
   const li = document.querySelector("li");
  
   li.remove();


    
})