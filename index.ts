interface Person{
    name:string;
    email:string;
    salary:string;
    active:boolean;
}

var people = Array<Person>();

function createPeople():void {
    let newPerson:any;
    for(let i = 0; 1<10;i++){
        newPerson = {
            name:`Abril${i}`,
            email:`i${i}@gmail.com`,
            salary:(i+10000),
            active:i%2==0?true:false
        }
        people.push(newPerson);
        }
}