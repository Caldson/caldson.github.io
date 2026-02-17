function getNewsactiviting(element_id, timestartyear, timestartmonth, timestartday, timestarthour, timestarttime, timeendyear, timeendmonth, timeendday, timeendhour, timeendtime) {
    label = document.getElementById(element_id);
    currentYear = getYear();
    currentMonth = getMonth();
    currentDay = getDay();
    currentHour = getHour();
    currentMinute = getMinute();
    const startTime = new Date(timestartyear, timestartmonth - 1, timestartday, timestarthour, timestarttime);
    const endTime = new Date(timeendyear, timeendmonth - 1, timeendday, timeendhour, timeendtime);
    const currentTime = new Date();
    const isAfterStartTime = currentTime >= startTime;
    const isBeforeEndTime = currentTime < endTime;
    const isWithinTimeRange = isAfterStartTime && isBeforeEndTime;
    if (currentTime >= endTime) {
        console.log(`ID ${element_id} 判断结果: 活动已结束`);
        label.innerText = `· 活动已结束`;
        label.classList.remove("activiting");
        label.classList.add("ended");
    } else if (isWithinTimeRange) {
        label.innerText = `· 活动已开始 ${timeendyear}/${timeendmonth}/${timeendday} ${timeendhour}:${timeendtime}结束`;
        label.classList.remove("unactiviting");
        label.classList.add("activiting");
    } else {
        label.innerText = `· 活动未开始 ${timestartyear}/${timestartmonth}/${timestartday} ${timestarthour}:${timestarttime}~${timeendyear}/${timeendmonth}/${timeendday} ${timeendhour}:${timeendtime}`;
        label.classList.remove("activiting");
        label.classList.add("unactiviting");
    }
}