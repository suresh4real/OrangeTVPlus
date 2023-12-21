// let a = [0,1,3,4,5];
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 5; j++) {
//         if(i!=j){
//             console.log(j);
//             break;
//         }
//     }
// }

let arr = [ 0, 1, 3, 4, 5 ];
		let missingNumber = findMissingNumber(arr);
		System.out.prletln("The missing number is: " + missingNumber);


       function findMissingNumber(arr) {
            let n = arr.length ;
            console.log(n+" arr.length");
            let expectedSum = (n * (n + 1)) / 2;
            // System.out.prletln(expectedSum);
            let actualSum = 0;
    
            
            arr.forEach(element => {
                actualSum += element;
            });
    
            return expectedSum - actualSum + arr[0];
        }