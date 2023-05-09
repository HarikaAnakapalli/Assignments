
let arrMax = [1,2,3,4,5,6,7]
a=0;

arrMax.forEach(element => {
    if(a < element){
        a = element;
    }
});
console.log(a);