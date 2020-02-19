console.time();
console.log("Yogesh Gaur");
console.warn("There is a warning");
console.assert(555<123,"This is not possible");
console.table([{name:'Yogesh',age: "19"},{name:"Shashank",hobby:"fbkjb"}])
console.timeEnd();
console.error("This is an error");
console.count();
let city="Delhi"
{
    let city="ghaziabad";
    console.log(city);
}
console.log(city);
let v=String(23);
console.log(v,(typeof v));
const k=0;
// k=12; //cannot assign another value to a const variable
console.log(k);
//console.clear();
// number
let f=34;
console.log(f,(typeof f));
// Boolean
let g=true;
console.log(g,(typeof g));
// string
let a="Chinoni";
console.log(a,(typeof a));
// undefined
let c;
console.log(c,(typeof c));
let z="This is a sentence";
console.log(z.charAt(0));//character at(index)
console.log(z.slice(-4));//n character from last(n)
console.log(z.indexOf("This"));//index of character(character)
console.log(z.replace("This","That"));//Replace string with another string("string1","string2")
console.log(z.substring(1,4));
console.log(z.includes("This"));
console.log(z.lastIndexOf());