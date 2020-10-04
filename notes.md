1. var let const
   let->update allowed and redeclare not allowed variable withing the scope


2. template string
    var fname="akshit";
    var lname="suri";

    console.log(fname+" "+lname);
    console.log(`Hi ${fname} ${lname}`);

3. arrow function
   replace function(a,b){} to (a,b)=>{}


4. default parameters
   function add(a=10,b=10){}
   
   function object({name="akshit",age=19}={})


5. for-of loop
  let arr=[1,2,3,4,5];

for(let val of arr){
    console.log(val);
}

6. rest 
      converts the diff values to arr


7. spread 
   converts array to different values
  

8. class
   class Student{
    constructor(name,age,regno){
    this.name=name;
    this.age=age;
    this.regno=regno;
}
}

var Akshit=new Student("Akshit Singh",19,189301116);

console.log(Akshit);

9. class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayhi(){                  //instance method or prototype method
        console.log("hi",this.name);
    }
    static sayhello(obj){     //class methods called using class name only
        console.log(obj.age);
    }
}


10. extends keyword  class child extends parent
11. super keyword
   used in the constructor function of child to define the parameters of parent class

11. maps
   let map=new Map();
   map.set("name","akshit);
   
   map.set(key,value);
   map.get(key);
   map.delete(key);

   for iteration use for-of loop 
   foreach doesnot work

12. same a set 
no keys required
store unique values
no duplicates

var arr=[1,2,3,4,5,5,5,5];
new Map(arr);
new Set(arr);

13. Promise.all
     let p1=Promise.resolve(7);
let p2=42;
let p3="hello sir"

Promise.all([p1,p2,p3])
.then(function(val){
    val.forEach(function(a){
        console.log(a);
    })
})

13. generators
   function * sum(){}
    //returns object
   
   yield is where the program stops
   
   var a=sum();
   a.next()  // will return object with keys value and boolean done

14. object.assign
   creates new object
   not a deep clone


15. Array.from 
convert arraylikeobj to arrays
[].slice.call(aarlikeobj);

16. find
   arr.find is same as arr.filter diff is
    filter returns a array
    and find returns the elements

17. Number.isFinite(num)
   //to check whether it is a method or not