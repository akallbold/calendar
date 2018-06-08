import React, { Component } from 'react';

class CalendarTable extends Component {

  // firstDay = () => {
  //   new Date(this.year, this.month, 1)
  // }

  firstOfMonth = new Date(this.props.currentDate.getFullYear(), this.props.currentDate.getMonth(), 1)

  firstOfMonthDay = this.firstOfMonth.getDay();




  createDayHeader = (dayArray) => {
    return dayArray.map((day, i) => {
      return <th key= {i} className= "col s1">{day}</th>
    })
  }

  createCalendarTable = () => {
    let dayCounter = 0
    let output = []
    let table = []
    for (let i = 0; i < 5; i++) {
      let children = []
      for (let j = 0; j < 7; j++) {
        if (i === 0){
          if (j >= this.firstOfMonthDay){
            dayCounter++
            children.push(<td key= {j}>{dayCounter}</td>)
          } else {
            dayCounter = ""
            children.push(<td key= {j}>{dayCounter}</td>)
          }
        } else {
          dayCounter++
                  children.push(<td key= {j}>{dayCounter}</td>)
        }

      }
      table.push(<tr key = {i}>{children}</tr>)
    }
    output.push(<tbody key = "Hello?">{table}</tbody>)
    return output
  }



  render() {
    // debugger
    return (
      <table className="col s12 table">
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
