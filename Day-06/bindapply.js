function greet(city,state,country) {
    //this->user
    console.log(this);
    console.log("Hii");
    this.name="john wick"
    console.log(city);
    console.log(state);

       
}

const user={ 
    name:'rj',
    age:30,
    paymentdone:false

}

let greetuser=greet.bind(user,"nYc","manchaster","Usa")
console.log(greetuser);
greetuser("Hp","ransi","India")
// greet("Uk","ransi","India")
// console.log(user);
