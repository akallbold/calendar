import React, { Component } from 'react';
import Header from './Header'
import CalendarTable from './CalendarTable'
import AddEvent from './AddEvent'

class MainContainer extends Component {
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  currentDate = new Date()

  state = {
    eventsArray: [{}],
    addEvent: true
  }
  handleNewEvent() {
    this.setState({addEvent:!this.state.addEvent})
  }


  render() {
    // debugger
    return (
      <div className= "container">
        <Header
                months= {this.months}
                currentDate= {this.currentDate}/>
        <CalendarTable  days= {this.days}
                        currentDate= {this.currentDate}
                        daysInMonth= {this.daysInMonth}
                        eventsArray = {this.state.eventsArray}
                        handleNewEvent = {this.handleNewEvent}/>
        <AddEvent addEvent={this.state.addEvent}/>
      </div>
    );
  }
}

export default MainContainer;
