class student {
    constructor(rollno, name, branch, section) {
        this.rollno = rollno;
        this.name = name;
        this.branch = branch;
        this.section = section;
    }
}
const stud1 = new student(101, 'Alice', 'CSE', 'A');
console.log(stud1.rollno);
console.log(stud1.name);
console.log(stud1.branch);
console.log(stud1.section);