const startDate = "2020-01-01";
const endDate = "2020-01-22"


function calculateDiffDates(startDate, endDate){


    let time1 = startDate.getTime();
    let time2 = endDate.getTime();
    
    if (time1 === NaN && time2 === NaN) return `Invalid Input`;

    let milisecDiff = Math.abs(time1-time2);
    let dateDiff = milisecDiff/(1000*3600*24)
    return dateDiff;
}
console.log(calculateDiffDates(08-05-2001, 01-08-2023));