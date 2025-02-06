let n=17;
let isPrime=true;

if(n<=1){
    isPrime=false;
}
else{
    for(i=2;i<n;i++){
        if(n%i==0){
            isPrime==false;
            break;
        }
    }
}
if(isPrime === true){
    console.log(`${n} is a prime number`)
}