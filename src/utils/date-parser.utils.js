const simpleHour = (dateString) => {
    let parsed = new Date(dateString);
    return parsed.getTime();
}

export {
    simpleHour
}