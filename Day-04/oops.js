class car{
    //public access modifier
    price;
    color;
    model;
    fuel;
    company;
    year;
      //this keyword refers to current object
 

    constructor(company){
        this.company=company
    }

    constructor(fuel,year){
        this.fuel=fuel;
        this.year=year;
    }
    constructor(price,color,model){
        this.price=price;
        this.color=color;
        this.model=model;
    }


    start(){
        console.log("Car is running");
        
    }

    stop(){
        console.log("Car is stopped");
    }
}

//Memory allocation dodno ke liye alag alag hota hai
//ek ka change dusre ko affect ni karega
let tata=new car(1000,"blue","nano")
console.log(tata);
console.log(tata.price);



let mahindra=new car(100,"red","bolero")
console.log(mahindra);


let audi=("audi -A8")
console.log(audi);


let bnez=("E-20",2030);
console.log(bnez);
