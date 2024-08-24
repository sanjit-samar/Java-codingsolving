let givenArray = [1,2,3,4,5];

function reverseArray(arg){
    let newArray = [];
    for(let i = arg.length -1; i >=0; i--){
        newArray.push(arg[i]);
    }
    return newArray;
}

let res = reverseArray(givenArray);
console.log(res);