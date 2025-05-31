// for (let i = 1; i <= 5; i++) {        
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {   
//         pattern += "*";
//     }
//     console.log(pattern);
// }
// for (let i = 5; i >= 1; i--) {        
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {   
//         pattern += "*";
//     }
//     console.log(pattern);
// }
// function program

// function ABC(){
//     console.log("hello");
// }
// ABC()

// const userdata = {
//     name:["ram","sita","hari"]
// }
// function greet(userdata){
//     console.log("hello"+userdata)
// }
// data = userdata.name.forEach(greet)


// const userdata1 = { name: ["ram","sita","hari"]

// }
// function abc(name){
//     return "hello "+ name +"!"
// }const greeting = userdata1.name.map(greet1)
// greeting.forEach((data)=>{
//     console.log(data)
    
// })
function simpleinterest(p,t,r){
    const i=(p*t*r)/100
    return i;
}
// p =prompt("enter P");
// t = prompt("enter T");
// r = prompt ("enter R");
const i= simpleinterest();
console.log(simpleinterest(100,2,3));