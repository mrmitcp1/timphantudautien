function findFirstOccurrence(numbers:number[],target:number) {
    let low : number = 0;
    let high : number = numbers.length-1;
    let result: number = -1;
    while (low <= high){
        let mid = Math.floor((low + high)/2);
        if (numbers[mid]===target){
             result = mid
            high = mid - 1;
        }else  if (target<numbers[mid]){
            high=mid - 1
        }else low = mid  +1
    }return result
}
let data=[1,1,2,3,4,5,7]
let target =3
let index =  findFirstOccurrence(data,target);
if (index!==-1){
    console.log(`phan tu ${target} xuat hien dau tien tai vi tri ${index}`)
}else {
    console.log(`phan ti ${target} khong ton tai`)
}
