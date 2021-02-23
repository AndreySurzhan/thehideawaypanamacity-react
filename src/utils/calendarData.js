import axios from 'axios';
const ical = require('ical');


const isEventType = (data) => (property) => data[property].type === 'VEVENT';
const getCalendarRangeObj = (data, options) => (property) => (
    {
        startDate: data[property].start,
        endDate: data[property].end,
        color: options && options.color ? options.color : 'red',
        disabled: options && options.disabled ? options.disabled : true,
        showDateDisplay: options && options.showDateDisplay ? options.showDateDisplay : false,
        showPreview: options && options.showPreview ? options.showPreview : false
    } 
);

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
