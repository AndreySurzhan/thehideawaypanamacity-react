import axios from 'axios';
const ical = require('ical');


const isEventType = (data) => (property) => data[property].type === 'VEVENT';
const addDaysToDate = (date, days) => {
    const result = new Date(date);

    result.setDate(result.getDate() + days);

    return result;;
}
const getCalendarRangeObj = (data, options) => (property) => {
    // calculate checkin and checkout dates
    const startDate = addDaysToDate(data[property].start, 1);
    const endDate = addDaysToDate(data[property].end, -1);

    return {
        startDate,
        endDate,
        color: options && options.color ? options.color : 'red',
        disabled: options && options.disabled ? options.disabled : true,
        showDateDisplay: options && options.showDateDisplay ? options.showDateDisplay : false,
        showPreview: options && options.showPreview ? options.showPreview : false
    } 
};

export async function getCalendarEventsFromUrl(url, requestOptions, rangeOptions) {
    try {
        const response = await axios.get(url, requestOptions);
        const parsedData = ical.parseICS(response.data);
        const calendarData = Object.keys(parsedData)
            .filter(isEventType(parsedData))
            .map(getCalendarRangeObj(parsedData, rangeOptions));

        return calendarData;
    } catch (error) {
        console.error(error);
        return [];
    }
}
