function FirstElement(array){
    if(array.length > 0){
        return array[0]
    }
}
let number = [1,2,4,5,6]
let fistElement = FirstElement(number);
console.log(fistElement)