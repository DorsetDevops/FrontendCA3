const DayInMs = 24 * 60 * 60 * 1000;

function removeDays(date: Date,value: number) {
    return new Date(date.getTime() - value * DayInMs)
}

export default removeDays;
