let arr=[1,2,3,4,5,6,7,8,9];

arr.forEach((value,index,arr)=> {

    // console.log(value*2);

});

//arrowfucn
//this
//backticks

let age=20;
console.log(`my age is${age}`);

let obj={
    name:'ysh',
    city:'nYC',
    dist:'almata'
};
let {name,city}=obj;
console.log(name);
console.log(city);
console.log(obj.dist);

let student={...obj}
console.log(student==obj); //compares whether both variables refer to the exact same object in memory.
student.name="yashr"
console.log(obj);
console.log(student);


let anotherstudent=obj;
anotherstudent.name="yash"
console.log(anotherstudent==obj);
console.log(anotherstudent);

//memoization

function fact(n) {
    let ans=1;
    for(let i=0 ; i<n ; i++) ans*=i;
    return ans;
}

function memoize(fn) {
    let cache={};
    return function (n) {
        if(cache[n]){
            console.log("returning");
            return cache[n];
            
        }

        console.log("Calculating");
        let ans=fn(n);
        return cache[n]=ans;
        
        
    }
    
}

let myFact = memoize(fact);
console.log(myFact(5)); // Calculate kia
console.log(myFact(5)); // Cache se nikal kar diya