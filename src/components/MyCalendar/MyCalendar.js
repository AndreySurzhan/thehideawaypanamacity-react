import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from 'react';

import { Calendar } from 'react-date-range';
 
export class MyCalendar extends React.Component {
  handleSelect(date){
    console.log(date); // native Date object
  }
  render(){
    return (
      <Calendar
        date={new Date()}
        onChange={this.handleSelect}
      />
    )
  }
}