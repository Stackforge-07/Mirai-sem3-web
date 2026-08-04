class animal{
    #a=90
    b=80;
    c=70;

    eat(){
        console.log("sheru eats");
        
    }
    die(){
        console.log("shero mar gaya");
        
    }

}
class dog extends animal{
    bark(){
        console.log("Barking");
        
    }
}

const sheru=new dog();
console.log(sheru);

sheru.die();

