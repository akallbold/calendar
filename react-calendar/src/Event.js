import React, { Component } from 'react';
import Popup from "reactjs-popup";

class Event extends Component {


handleEventClick = () => {
  // console.log("clicked on event")
  // return <EventDetails event={this.props.event}/>
}

  render() {
    // debugger
    // console.log("eventProps", this.props)
    return (
      <div onClick = {this.handleEventClick}>
        <Popup className= "event" trigger={<button>{this.props.event.description}</button>} position="right center">
          <div className= "event">
            <h6>{this.props.event.description}</h6>
            <h3>Start Time: {this.props.event.startTime}</h3>
            <h3>End Time: {this.props.event.endTime}</h3>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Event;
