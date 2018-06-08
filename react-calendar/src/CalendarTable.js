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
  doDoubleClickAction(date) {
    // debugger
    this.props.handleNewEvent({year: this.currentYear,
                               month:this.currentMonth,
                               date: date.getDate()})
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
  handleDoubleClick(date){
    clearTimeout(this.timer);
    this.prevent = true;
    this.doDoubleClickAction(date);
  }


  createDayHeader = (dayArray) => {
    return dayArray.map((day, i) => {
      return <th key= {i} className= "col s1">{day}</th>
    })
  }



  events = (date) => {
    let output = []
    this.props.eventsArray.forEach(event=>{
        if (event.year === this.currentYear && event.month === this.currentMonth){
          if (event.date === date.getDate()){
            console.log('event match!', event)
            output.push(<Event event={event}/>)
          }
        }
    })
    return output
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
            let date = new Date(this.currentYear, this.currentMonth, dayCounter, 12, 0, 0, 0)
            let relevantEvents = this.events(date)
            console.log(relevantEvents)
            let content = ""
            if (relevantEvents.length>0){
              debugger
              relevantEvents.map(event => {
                debugger
                content += <Event event={event}/>
              })
            }
            children.push(<span>
                            <td key= {col}
                              onClick={this.handleClick.bind(this)}
                              onDoubleClick = {this.handleDoubleClick.bind(this, date)}>{dayCounter}{content}</td>

                          </span>)
                              // children.push()
                              //replace with relevent events
                              // children.push(<Event/>)

          } else {
            dayCounter = ""
            children.push(<td key= {col}
                              onClick={this.handleClick.bind(this)}
                              onDoubleClick = {this.handleDoubleClick.bind(this)}>{dayCounter}</td>)
          }
        } else {
          dayCounter++
          if (dayCounter <= this.props.daysInMonth[this.currentMonth]){
            let date = new Date(this.currentYear, this.currentMonth, dayCounter, 12, 0, 0, 0)
            let relevantEvents = this.events(date)
            console.log(relevantEvents)
            children.push(<td key= {col}
                              onClick={this.handleClick.bind(this)}
                              onDoubleClick = {this.handleDoubleClick.bind(this, date)}>{dayCounter}</td>)
          } else {
            let date = new Date(this.currentYear, this.currentMonth, dayCounter, 12, 0, 0, 0)
            let relevantEvents = this.events(date)
            console.log(relevantEvents)
            children.push(<td key= {col}
                              onClick={this.handleClick.bind(this)}
                              onDoubleClick = {this.handleDoubleClick.bind(this, date)}>""</td>)
          }
        }
      }
      table.push(<tr key = {row}>{children}</tr>)
    }
    output.push(<tbody>{table}</tbody>)
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
