class Student{
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Sofir Uddin High School & Collage";

    }
}

const student1 = new Student(12, 'Rimon Ahmed');
const student2 = new Student(22, 'Sumon Ahmed');

console.log(student1.name, student2.school);