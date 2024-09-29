


let obj={
    name:"vikas",
    age:27,
    address:"delhi",
    occupation:"sde",
    salary:10000,
    marks:[50,60,70],
    details:{
        firstname:"vikas",
        lastname:"chaudhary"
    },
    fun:function(){
        console.log("i am a fun inside a object - method");
        console.log(this.address)

        return `my name is ${this.name} and my address is ${this.address} and my salary is ${this.salary}`
        


    }


}

// console.log(obj.details.firstname);
console.log(obj.fun());




