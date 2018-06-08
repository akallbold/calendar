import React, { Component } from 'react';
import EventDetails from './EventDetails'
import Popup from "reactjs-popup";

class Event extends Component {


handleEventClick = () => {
  // console.log("clicked on event")
  // return <EventDetails event={this.props.event}/>
}

  render() {
    console.log("eventProps", this.props)
    return (
      <div onClick = {this.handleEventClick}>
        <Popup className= "event" trigger={<button>event</button>} position="right center">
          <div className= "event">
            <h6>Event Name</h6>
            <h6>Event Start Time</h6>
            <h6>Event End Time</h6>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Event;
