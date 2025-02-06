function pallindrome(num){
    let numStr=num.toString();
    let result=numStr.split('').reverse().join('');
    return numStr === result
    
}
console.log(pallindrome(121))