class person{
    name;
    age;
    district;

    constructor(name,age,district){
        this.name=name;
        this.age=age;
        this.district=district;
    }

    run(){
        console.log(`${name} is running`);
        
    }

    walk(){
        console.log(`${name} is walking`);
    }
}

let bond=new person("James",40,"Mp")
console.log(bond);

let batman=new person("Batman",1000,"aSSAM")
console.log(batman);

