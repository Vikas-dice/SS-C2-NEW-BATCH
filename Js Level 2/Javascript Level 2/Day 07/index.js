// class Shape{
// color;
// name;

// printDetails(){
//     console.log(`shape color is ${this.color}`)
// }
// }

// const rectangle=new Shape();
// rectangle.color="red"
// rectangle.name="rect1"
// rectangle.printDetails()



// const circle=new Shape();
// circle.name="circle"
// circle.color="yellow"
// circle.printDetails()


class Student{
    id=0;
    name="";
    course="";
    dob="";
    #salary=200;
    lastname="";


    constructor(id,name,course,dob,salary,lastname){
        console.log("custructor ran ")
   this.id=id;
   this.name=name;
   this.course=course;
   this.dob=dob;
   this.#salary=salary;
   this.lastname=lastname;
    }
 
    printdetails(){
        console.log(`my salary is ${this.#salary}`)
    }
}


const st1=new Student(1,"pawan","web dev","2 jan,2000",30000,"kumar");
const st2=new Student(1,"pawan","web dev","2 jan,2000",30000,"kumar");
const st3=new Student(1,"pawan","web dev","2 jan,2000",30000,"kumar");