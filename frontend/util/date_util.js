
export const distanceFromToday = (date) => {
    //does this work now to get EST??
    let now = new Date() - 5;
    let daysAgo = Math.abs(Math.floor((now - date)/1000/60/60/24));
    let finalMsg = ""
    if (daysAgo === 1) {
        finalMsg = `Yesterday`;
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
    var parts = duration.split(':');
    let hrs = parts[0];
    let mins = parts[1];
    let secs = parts[2];
    let durationInMins = parseFloat(hrs*60) + parseFloat(mins) + parseFloat(secs/60);
    let minPerMilePace = durationInMins / distance;
    return (minPerMilePace).toFixed(2); //min/mi
}


export const getTodaysDate = () => {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getYear() + 1900;
    return  month + "/" + day + "/" + year;
}

