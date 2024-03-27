// // // // 1. Daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.
// let num = +prompt("Bir ədəd daxil edin:");
// if (num <= 1) {
//     console.log("Daxil etdiyiniz ədəd bir sadə ədəd deyil.");
// } else {
//     let sade = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             sade = false;
//             break;
//         }
//     }
//     if (sade) {
//         console.log("Daxil etdiyiniz ədəd bir sadə ədəddir.");
//     } else {
//         console.log("Daxil etdiyiniz ədəd bir mürəkkəb ədəddir.");
//     }
// }



// 2. Daxil olunan ədədin mükəmməl olub olmadığını tapın.

// let sum = 0;
// for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sum += i;
//     }
// }

// if (sum === num) {
//     console.log("Daxil etdiyiniz ədəd mükəmməl bir ədəddir.");
// } else {
//     console.log("Daxil etdiyiniz ədəd mükəmməl bir ədəd deyil.");
// }



// 3. Daxil olunan 2 ədəd arasındakı mükəmməl ədədləri göstərin.
// let num1 = +prompt("Birinci ədədi daxil edin:");
// let num2 = +prompt("İkinci ədədi daxil edin:");

// console.log("Mükəmməl ədədlər:");

// for (let num = num1; num <= num2; num++) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     if (sum === num) {
//         console.log(num);
//     }
// }

// 4. Daxil olunan 2 ədəd arasındakı sadə ədədləri göstərin.
// let num1 = +prompt("Birinci ədədi daxil edin:");
// let num2 = +prompt("İkinci ədədi daxil edin:");
// console.log(start + " və " + end + " Iki Ədədin Arasindaki Sadə Ədədlər:");
// for (let num = start; num <= end; num++) {
//    let sade = true;
//    if (num === 1) {
//        sade = false;
//    }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//        if (num % i === 0) {
//            sade = false;
//        }
//    }
//    if (sade) {
//        console.log(num);
//    }
// }
// // 

// // 5. Daxil olunan 2 ədəd arasındakı sonu 7 ilə bitən ədədləri göstərin.
// let start = parseInt(prompt("Birinci Ədədi Daxil Edin:"));
// let end = parseInt(prompt("İkinci Ədədi Daxil Edin:"));
// console.log(start + " və " + end + " Ədədi Arasındakı Sonu 7 ilə Bitən Ədədlər:");
// for (let num = start; num <= end; num++) {
//    if (num % 10 === 7) {
//        console.log(num);
//    }
// }