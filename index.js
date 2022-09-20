

let factor=0;
let number=17;
for(let i=1;i<=number;i++){
    if(number%i==0){

        factor++;
    }
}
if (factor == 2) {
    console.log("prime")
} else {
    console.log("not prime")
}