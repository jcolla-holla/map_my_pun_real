export const distanceFromToday = (date) => {
    let now = new Date();
    return Math.abs(Math.floor((now - date)/1000/60/60/24));
}