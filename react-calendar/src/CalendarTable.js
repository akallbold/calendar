import React, { Component } from 'react';
import Event from './Event'


class CalendarTable extends Component {

  currentMonth = this.props.currentDate.getMonth()
  currentYear = this.props.currentDate.getFullYear()
  firstOfMonth = new Date(this.currentYear, this.currentMonth, 1)
  firstOfMonthDay = this.firstOfMonth.getDay();

  timer = 0;
  delay = 200;
  prevent = false;

  doClickAction() {
    console.log(' click');
  }
  doDoubleClickAction() {
    this.props.handleNewEvent()
  }
  handleClick() {
    let me = this;
    this.timer = setTimeout(function() {
      if (!this.prevent) {
        me.doClickAction();
      }
      this.prevent = false;
    }, this.delay);
  }
  handleDoubleClick(){
    clearTimeout(this.timer);
    this.prevent = true;
    this.doDoubleClickAction();
  }


  createDayHeader = (dayArray) => {
    return dayArray.map((day, i) => {
      return <th key= {i} className= "col s1">{day}</th>
    })
  }

  createCalendarTable = () => {
    let dayCounter = 0
    let output = []
    let table = []
    for (let row = 0; row < 5; row++) {
      let children = []
      for (let col = 0; col < 7; col++) {
        if (row === 0){
          if (col >= this.firstOfMonthDay){
            dayCounter++
            children.push(<td key= {col} onClick={this.handleClick.bind(this)}
              onDoubleClick = {this.handleDoubleClick.bind(this)}>{dayCounter}</td>)
          } else {
            dayCounter = ""
            children.push(<td key= {col} onClick={this.handleClick.bind(this)}
    onDoubleClick = {this.handleDoubleClick.bind(this)}>{dayCounter}</td>)
          }
        } else {
          dayCounter++
          if (dayCounter <= this.props.daysInMonth[this.currentMonth]){
            children.push(<td key= {col} onClick={this.handleClick.bind(this)}
    onDoubleClick = {this.handleDoubleClick.bind(this)}>{dayCounter}</td>)
          } else {
            children.push(<td key= {col} onClick={this.handleClick.bind(this)}
    onDoubleClick = {this.handleDoubleClick.bind(this)}>""</td>)
          }
        }
      }
      table.push(<tr key = {row}>{children}</tr>)
    }
    output.push(<tbody key = "Hello?">{table}</tbody>)
    return output
  }



  render() {
    return (
      <table className="col s9 table">
        <thead>
          <tr align="center">
            {this.createDayHeader(this.props.days)}
          </tr>
        </thead>
        {this.createCalendarTable()}
      </table>
    );
  }
}

export default CalendarTable;
