export const distanceFromToday = (date) => {
    //does this work now to get EST??
    let now = new Date() - 5;
    let daysAgo = Math.abs(Math.floor((now - date)/1000/60/60/24));
    // debugger
    let finalMsg = ""
    if (daysAgo === 1) {
        finalMsg = `${daysAgo} Day Ago`;
    } else if (daysAgo > 1) {
        finalMsg = `${daysAgo} Days Ago`;
    } else if (daysAgo < 1) {
        finalMsg = "Today";
    }
    return finalMsg;
}

// NOTE: 
// distance - comes from ROUTE
// duration - comes from WORKOUT

//duration is a string like "01:13"
export const calculateAvgPace = (duration, distance) => {
    debugger
    var parts = duration.split(':');
    let hrs = parts[0] % 12;
    if (parts[1]) {
        let min = parts[1];
    } else {
        let min = 0;
    }
    debugger
    let minInHrs = min/ 60;
    let durationInHrs = parseFloat(hrs + minInHrs);
    return (distance / durationInHrs).toFixed(2);
}


export const getTodaysDate = () => {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getYear() + 1900;
    return  month + "/" + day + "/" + year;
}

