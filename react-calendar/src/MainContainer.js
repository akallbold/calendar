import React, { Component } from 'react';
import Header from './Header'
import CalendarTable from './CalendarTable'

class MainContainer extends Component {
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  currentDate = new Date()

  render() {
    return (
      <div className= "container">
        <Header
                months= {this.months}
                currentDate= {this.currentDate}/>
        <CalendarTable days= {this.days}
                        currentDate= {this.currentDate}
                        daysInMonth= {this.daysInMonth}/>
      </div>
    );
  }
}

export default MainContainer;
