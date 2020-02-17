export const distanceFromToday = (date) => {
    let now = new Date();
    let daysAgo = Math.abs(Math.floor((now - date)/1000/60/60/24));
    return daysAgo === 0 ? "Today" : `${daysAgo} Ago`;
}