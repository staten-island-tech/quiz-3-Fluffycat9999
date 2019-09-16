//Quiz #3
/* Raphael and his family went on a holiday and went to 3 different restaurants. The bills were $140, $45 and $270.

To tip the waiter a fair amount, Raph created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, Raph would like to have 3 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
3) use the array method filter to create a new array called copy that only contains the final paid amounts over $100. */

const bill = [140, 45, 270];

function tipCalc(bill){
    let percentage;
    if(bill > 50){
        percentage = .2;
    } else if(bill >= 50 && bill < 200) {
        percentage = .15;
    } else (bill >= 200); {
        percentage = .1;
    }
    return percentage * bill;
}

const tips = [tipCalc(bill(0)),
tipCalc(bill(1)),
tipCalc(bill(2)),];
