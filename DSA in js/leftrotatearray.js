function leftRotatearray(arr){
    let temp=arr[0]
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1]
    }
    arr[arr.length-1]=temp
    return arr

}
const arr=[10,20,30,40]
console.log(leftRotatearray(arr))