//Global Scope
var globalVar = "I am a Gloabal Variable";
let globalLet = "iam also global but scoped with let";
const globalConst = "i am a gloobal const";

{
    //block scope
    var blockVar = "i am a block-scoped var";
    let blockLet = "i am a block scoped let";
    const blockConst ="i am a block scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);


function show(){
    var functionVar ="i am a blok scoped var";
    let functionLet = "let";
    const functionConst = " const";
}
show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
