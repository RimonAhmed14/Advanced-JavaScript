const students = [
    {id: 21, name: 'Omor Sunny'},
    {id: 31, name: 'Jakir Hussin'},
    {id: 41, name: 'Akbor Ali'},
    {id: 51, name: 'Forhad Ahmed'},
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);        
const bigger = students.filter(a => a.name);
const bigger2 = students.find(f => f.id > 40);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(bigger2);