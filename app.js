//Quiz #3
/* Raphael and his family went on a holiday and went to 3 different restaurants. The bills were $140, $45 and $270.

To tip the waiter a fair amount, Raph created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, Raph would like to have 3 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
3) use the array method filter to create a new array called copy that only contains the final paid amounts over $100. */

/* const bills = [140, 45, 270];
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
console.log(filter); */



/////Quiz#5
/* Let's remember the first coding challenge where Dejon and Rob compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Note: We must use 'this' inside the object to reference properties for our method


Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
Rob's Info: mass: 78, height: 1.69
Dejon's Info: mass: 110, height: 1.95 */

/* const rob = {
    fullName:'Robert Grande',
    mass: 78, 
    height: 1.69,
    getBMI: function(){
        return this.mass / (this.height * this.height);
    }
}
const dejon = {
    fullName:'Dejon Kurti',
    mass: 110,
    height: 1.95,
    getBMI: function(){
        return this.mass / (this.height * this.height);
    }
}

if(rob.getBMI() > dejon.getBMI()){
    console.log(`Robs BMI is higher. It is ${rob.getBMI()}`);
} else if(rob.getBMI() < dejon.getBMI()){
    console.log(`Dejons BMI is higher. It is ${dejon.getBMI()}`);
} else{
    console.log(`It be a tie man ${rob.getBMI()}`);
} */



//Quiz #5
const list = document.querySelectorAll('li');
console.log(list);


function filterplz(list){
    return list = 'Flexbox Video';
}

const filterList = list.filter(filterplz(list));
console.log(filterList);

const filtered = document.querySelector(data-time);

console.log(filtered);


.map(timeCode => {
    const parts = timeCode.split(':').seconds;
    //console.log(parts); 
    return parts;
})


//this was just really confusing