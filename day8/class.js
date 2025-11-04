const obj = {
    rollno: 101,
    branch: 'CSE',
    section : 'A'
    email : {
        email1: 'abc@gamil.com',
        email2: 'def@gmail.com'
    }
};
console.log(obj.rollno);
console.log(obj.branch);
console.log(obj.section);
console.log(typeof obj);
console.log(obj.email.email1);
console.log(obj.email.email2);
console.log(obj['rollno']);
console.log(obj['branch']);
console.log(obj['section']);
console.log(obj['email']['email1']);
console.log(obj['email']['email2']);        