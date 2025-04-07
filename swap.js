console.log("Swapping to two numbers")
function swap(a,b){
    var temp = a;
    a = b;
    b =temp;
    return[a,b];
}
console.log(swap(15,18));