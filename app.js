//Quiz #3
/* Raphael and his family went on a holiday and went to 3 different restaurants. The bills were $140, $45 and $270.

To tip the waiter a fair amount, Raph created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, Raph would like to have 3 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
3) use the array method filter to create a new array called copy that only contains the final paid amounts over $100. */

const bills = [140, 45, 270];
console.log(`The bills are ${bills}`)

function tipCalc(bills){
    let percentage;
    if(bills < 50){
        percentage = .2;
    } else if (bills >= 50 && bills < 200) {
        percentage = .15;
    } else{
        percentage = .1;
    }return percentage * bills;
}


const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
console.log(`The tips are ${tips}`);

const billsTips = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`The bills and tips together are ${billsTips}`);

const filter = billsTips.filter(function(billsTips){
    return billsTips > 100;
});
console.log(filter);