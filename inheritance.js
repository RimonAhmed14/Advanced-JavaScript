class Parent{
    constructor(fName) {
        this.fatherName = 'Abdur Rajjak';
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Abdullah");
console.log(baby.getFullName());