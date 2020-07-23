'use strict'
//Part 1 of 23july Assignment 1
var jeffMass=57 ;
var jeffHeight=5.0;

var toddMass=63;
var toddHeight=5.6;
//Part 2 of Assignment 1
function calculateBMI(mass,height)
{
    let BMI=( mass/(height*height));
    return BMI
}

var jeffBMI = calculateBMI(jeffMass,jeffHeight);
var toddBMI = calculateBMI(toddMass,toddHeight);

console.log('Calculated BMI of Jeff ' +jeffBMI);
console.log('Calculated BMI of Todd ' +toddBMI);
//part 3 of Assignment 1
var bool
jeffBMI > toddBMI ? bool= true : bool = false
//part 4 of Assignment 1
console.log(' Jeffs BMI higher than Todds BMI? ' +bool)

// part 1 of Assignment 2

let heathScore=[89,120,103]
let zaneScore=[116,94,123]

function calculateAvgScore(scores)
{
    let avgScore=0;
    for(let i of scores)
    {
        avgScore=avgScore+i;
    }
    avgScore=avgScore/3;
    return avgScore;
}
let avgHeathScore=calculateAvgScore(heathScore);
console.log(`\nAverage Heath's Score :`+avgHeathScore);

let avgZaneScore=calculateAvgScore(zaneScore);
console.log(`Average Zane's Score : `+avgZaneScore);

function Winner()
{
if(avgHeathScore===avgZaneScore)
{
    console.log('Match is draw');
}
else if(avgHeathScore>avgZaneScore)
{
    console.log('Heath is Winner.')
}
else{
    console.log('Zane is Winner.')
}
}

Winner();


//Changing the score to change the Winner 
let newHeathScore=[110,99,105];

console.log('\nResult after changing the scores\n')
avgHeathScore=calculateAvgScore(newHeathScore);
console.log('Average Heath New Score : '+avgHeathScore);
avgZaneScore=calculateAvgScore(zaneScore);
console.log('Average Zane Score : '+avgZaneScore);
Winner();

// Considering Mariah's Score 
console.log('\nConsidering Mariah Score \n');
let mariahScore=[97,134,105]
let avgMariahScore=calculateAvgScore(mariahScore);
console.log(`Average Heath's  New Score : `+avgHeathScore);
console.log(`Average Zane's Score : `+avgZaneScore);
console.log(`Average Mariah's Score : `+avgMariahScore);

if(avgHeathScore===avgZaneScore===avgMariahScore)
{
    console.log('Match is draw');
}
else if(avgHeathScore >avgZaneScore && avgHeathScore>avgMariahScore)
{
    console.log('Heath is Winner.')
}
else if(avgZaneScore>avgHeathScore && avgZaneScore>avgMariahScore)
{
    console.log('Zane is Winner.')
}
else if (avgMariahScore>avgHeathScore && avgMariahScore>avgZaneScore)
{
    console.log('Mariah is Winner.')
}


