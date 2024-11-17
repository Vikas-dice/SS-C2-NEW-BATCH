class Student {
    #fname; // Define fname as a private field
    constructor(name, cls, dob, fname, mname, address) {
        this.name = name;
        this.cls = cls;
        this.dob = dob;
        this.#fname = fname; // Use private field
        this.mname = mname;
        this.address = address;
    }

    getFatherName() {
        return this.#fname; // Access the private field within the class
    }

    setFatherName(newName) {
        this.#fname = newName; // Setter method to update private field
    }
}

const p1 = new Student('Prajjwal', '12', '2004', 'Mukesh', 'Babita', 'Gokuldham');

// Accessing the private field using the getter method
console.log(p1.getFatherName()); // Outputs: Mukesh

// Setting a new value to the private field using the setter method
p1.setFatherName('JhetaLal');
console.log(p1.getFatherName()); // Outputs: JhetaLal

// Direct access to private field will result in an error
// console.log(p1.#fname); /// Syntax Error: Private field '#fname' must be declared in an enclosing class
