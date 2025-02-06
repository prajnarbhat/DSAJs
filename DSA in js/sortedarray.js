function checkSortedArray(){
    for (let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
       
    }
    return true;
}
const arr=[20,30,40,50]
console.log(checkSortedArray(arr))