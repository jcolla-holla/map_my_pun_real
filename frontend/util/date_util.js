export const distanceFromToday = (date) => {
    //does this work now to get EST??
    let now = new Date() - 5;
    let daysAgo = Math.abs(Math.floor((now - date)/1000/60/60/24));
    // debugger
    return daysAgo <= 1 ? "Today" : `${daysAgo} Day(s) Ago`;
}

// NOTE: 
// distance - comes from ROUTE
// duration - comes from WORKOUT

//duration is a string like "01:13"
export const calculateAvgPace = (duration, distance) => {
    // debugger
    var parts = duration.split(':');
    let hrs = parts[0] % 12;
    if (parts[1]) {
        let min = parts[1];
    } else {
        let min = 0;
    }
    let minInHrs = min/ 60;
    let durationInHrs = parseFloat(hrs + minInHrs);
    return (distance / durationInHrs).toFixed(2);
}


