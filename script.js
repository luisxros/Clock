
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360);
    console.log(now);
}

setInterval(setDate, 1000);