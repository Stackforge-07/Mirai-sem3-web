console.log(this);
//Browser pe iski value window->Global object
//Node ke environment me empty object


let obj={
    name:'prakhar',
    age:'20',
    city:'NYc',
    country:'USA',
    displayinfo:function () {
        
        console.log(this); 
        return this;       
    },
    " ":'newish'
};

console.log(obj.city);
console.log(obj['city']);
console.log(obj[' ']);
// console.log(obj.' '); -->doent work
 // this depend kis object ke andar hai 

//this points to current object
//agar kuch return fucntion na kare or usko console me log kare to undefined ayega

console.log(obj.displayinfo);
console.log(obj.displayinfo());









