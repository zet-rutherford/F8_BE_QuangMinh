
function msToTime_(duration){
    var totalSec = Math.floor(duration / 1000),
        days =Math.floor((totalSec / 86400))
        hours = Math.floor((totalSec%86400)/3600),
        minutes = Math.floor((totalSec%3600)/60),
        sec = (totalSec % 60),
        milisec = (duration % 1000)
    return `${days} days ${hours} hours ${minutes} min ${sec} sec ${milisec} milisec`
}

console.log(msToTime_(12000000));