import React, { Component } from 'react';
import Popup from "reactjs-popup";

class Event extends Component {


handleEventClick = () => {
  // console.log("clicked on event")
  // return <EventDetails event={this.props.event}/>
}

  render() {
    return (
      <div onClick = {this.handleEventClick}>
        <Popup trigger={<p className= "event">{this.props.event.description}</p>} position="right center">
          <div className="center">
            <h3>{this.props.event.description}</h3>
            <h6>Start Time: {this.props.event.startTime}</h6>
            <h6>End Time: {this.props.event.endTime}</h6>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Event;
