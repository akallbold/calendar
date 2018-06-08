import React, { Component } from 'react';
import Header from './Header'
import CalendarTable from './CalendarTable'
import AddEvent from './AddEvent'

class MainContainer extends Component {
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  currentDate = new Date()
  addEventDate = {}

  state = {
    eventsArray: [],
    addEvent: false,
    description:"",
    startTime:"",
    endTime:""
    
  }

  handleNewEvent = (eventDate) => {
    this.addEventDate= eventDate
    this.setState({addEvent:!this.state.addEvent})
  }

  updateInputChange = (name,value) => {
    // debugger
    this.setState({[name]: value})
  }

  saveEvent = () => {
    // debugger
    let newEvent = {description: this.state.description,
                    startTime: this.state.startTime,
                    endTime: this.state.endTime,
                    year:this.addEventDate.year,
                    month:this.addEventDate.month,
                    date:this.addEventDate.date,
                    startDateObj: new Date( this.addEventDate.year,
                                            this.addEventDate.month,
                                            this.addEventDate.date,
                                            this.state.startTime.slice(0,2),
                                            this.state.startTime.slice(3,5), 0, 0),
                    endDateObj:new Date(    this.addEventDate.year,
                                            this.addEventDate.month, this.addEventDate.date, this.state.endTime.slice(0,2), this.state.endTime.slice(3,5), 0, 0)
                  }
    let updatedArray = [...this.state.eventsArray, newEvent]
    this.setState({eventsArray:updatedArray, description:"", startTime:"",endTime:"" })
  }



  render() {
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
        <AddEvent addEvent={this.state.addEvent}
                  addEventDate={this.addEventDate}
                  months= {this.months}
                  updateInputChange= {this.updateInputChange}
                  saveEvent={this.saveEvent}
                 description= {this.state.description}
                 startTime={this.state.startTime}
                 endTime={this.state.endTime}/>
      </div>
    );
  }
}

export default MainContainer;
