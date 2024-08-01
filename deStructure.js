/*
const Person = {Name: 'Rimon Ahmed', Age: 18, Job: 'Facebook Scroling', Addrass: 'Sylhet', Phone: 8801314533486, friends: ['Muhammod', 'Muhib', 'Fahim', 'Mehdi', 'Tanim']}

const Name = Person.Name;
const Age = Person.Age;
const Job = Person.Job;
const Phone = Person.Phone;

console.log(Name, Age, Job, Phone);
console.log(Age);
console.log(Job);
console.log(Phone);
// */


const Person = {Name: 'Rimon Ahmed', Age: 18, Job: 'Facebook Scroling', Addrass: 'Sylhet', Phone: 8801314533486, friends: ['Muhammod', 'Muhib', 'Fahim', 'Mehdi', 'Tanim']}

/*
const Name = Person.Name;
const Age = Person.Age;
const Job = Person.Job;
const Phone = Person.Phone;
// */
const {Phone, Name, salary} = Person;

// console.log(Name, Age, Job, Phone);
// console.log(Age);
// console.log(Job);
console.log(Name, Phone, salary);

const friend = ['Tanim', 'Mahdi', 'Fahim', 'Muhib', 'Aklas'];
const [f1, f2, f3, ...f4] = friend;
console.log(f1, f3, f2, f4);
console.log(...f4);


const complexObject = {
    name: 'Rimon Ahmed',
    info: {
        addrass: 'Sylhet',
        phone: 8801314533486,
    }
}

const {addrass} = complexObject.info;
console.log(addrass);