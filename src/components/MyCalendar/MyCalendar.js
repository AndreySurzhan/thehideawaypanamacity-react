import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './MyCalendar.css';
import React from 'react';

import { DateRange  } from 'react-date-range';

 
export function MyCalendar(props) {
    return (
      <DateRange className="my-calendar"
        onPreviewChange ={() =>{}}
        ranges={props.ranges}
      />
    )
}