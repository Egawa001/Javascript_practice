
// const foo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([30, "test"]);
//     }, 5000);
// });

// foo
// .then(hoge => {
//     console.log("work!")
//     console.log(hoge);
// })
// .catch(error => {
//     console.log("error")
//     console.log(error)
// })


// fetch(('https://www.metaweather.com/api/location/44418/'), {
//     mode: 'no-cors',
// })
// .then(result => console.log(result))
// .catch(error => console.log(error))





// basic javascript part-01

// const price =[124, 48, 268, 180, 42];
// const priceTax = [];

// function calc(bills) {
//     for (let i = 0; i < bills.length; i++) {
//         if (bills[i] < 50) {
//             const bill = bills[i] * 0.2;
//             priceTax.push(bill);
//         } else if(bills[i] >= 50 && bills[i] <200) {
//             const bill = bills[i] * 0.15;
//             priceTax.push(bill);
//         } else {
//             const bill = bills[i] * 0.1;
//             priceTax.push(bill);
//         }
//     }
//     console.log(priceTax);
// }

// function average(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     };
//     return sum / arr.length;
// }

// calc(price);
// const result = average(priceTax);

// console.log(result);




// ES6

const price =[124, 48, 268, 180, 42];
const priceTax = [];

function calc(bills) {
    for (const el of bills) {
        if (el < 50) {
            push(el * 0.2);
        } else if(el >= 50 && el <200) {
            push(el * 0.15);
        } else {
            push(el * 0.1);
        }
    }
    console.log(priceTax);
}

const push = add => {
    priceTax.push(add);
}


function average(arr) {
    let sum = 0;
    for (const el of arr) {
        sum = sum + el;
    };
    return sum / arr.length;
}

calc(price);
const result = average(priceTax);

console.log(result);