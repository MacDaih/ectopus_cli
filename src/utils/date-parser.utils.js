const simpleHour = (dateString) => {
    let parsed = new Date(dateString);
    return parsed.getTime();
};
const parseDur = (milis) => {
    const dur = milis / 1000;
    const duration = dur.toString() + 's';
    return duration;
};
const parseDate = (date) => {
    let  vec = date.replace('T',' ');
    let split = vec.split('.');
    split.pop();
    return split[0]; 
}
export {
    parseDate,
    parseDur,
    simpleHour
}