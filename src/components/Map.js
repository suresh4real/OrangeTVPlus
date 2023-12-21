let a = [1, 2, 3, 4, 5];

// let res = a.map((v,i)=>{return v*i});
// console.log(res);

// function customMap( callback){
//     let newArray=[]
//     for (let i = 0; i < a.length; i++) {
//         let val=callback(a[i],i,a)
//         newArray.push(val)
//     }
//     return newArray;
// }    
// let res = customMap( (v,i,a)=>{return v+"$"})
// console.log(res);
// --------------------------------------------------
function customFilter(callback) {
    let newArray = []
    for (let i = 0; i < a.length; i++) {
        let val = callback(a[i], i, a)
        if (val) {
            newArray.push(a[i])
        }
    }
    return newArray;
}
let res = customFilter((v, i, a) => { return v * i==2 })
console.log(res);

// let r = a.filter( (v)=>{return v%2==0})
// console.log(r);

