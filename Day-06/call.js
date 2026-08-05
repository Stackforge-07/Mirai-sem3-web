//call apply bind
//this ko custom set kar sakte ho ki kisko refrence karega
function payment() {

    console.log("Payment completed");
    console.log(this);
    
}

let obj1={
    name:'ysh',
    age:30,
    paymentdone:false
}

let obj2={
    name:'bnd',
    age:40
}
// payment()

function greet() {
    console.log(this);
    
    
}
// greet.call(obj1) //now this refers to current obj that we have passed i.e. obj1 by .call

//this ko manupulate kar rahe hai kis object ko refer kargea
// greet.call(obj2)

function greet(city,village) {
    console.log(this.age);
    console.log(city);
    this.name='yshh'
    console.log(village);
    this.payment=true
    
}

// greet("nYc",'vadapav') //this=->window
// greet.call(obj1,"nYc",'vadapav')
// console.log(obj1);

//same as call but we pass as arguments as an array


function namste(...arr) {

  console.log(this);
  console.log(arr);
}
let arr=['nYc','Madagaskar','bomaby',34]
namste.apply(obj1,arr)

