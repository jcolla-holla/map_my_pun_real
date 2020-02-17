export const distanceFromToday = (date) => {
    let now = new Date();
    let daysAgo = Math.abs(Math.floor((now - date)/1000/60/60/24));
    return daysAgo === 0 ? "Today" : `${daysAgo} Ago`;
}

// NOTE: 
// distance - comes from ROUTE
// duration - comes from WORKOUT

//duration is a string like "01:13"
export const calculateAvgPace = (duration, distance) => {

    var parts = duration.split(':');
   
    let hrs = parts[0] % 12;
    let min = parts[1];

    let minInHrs = min/ 60;

    let durationInHrs = parseFloat(hrs + minInHrs.toFixed(2));

    return distance/durationInHrs;
}


