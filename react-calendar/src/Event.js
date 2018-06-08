import React, { Component } from 'react';
import EventDetails from './EventDetails'

class Event extends Component {




  render() {
    // debugger
    return (
      <div className= "row">
        <span className= "col s6 left">
          <span className= "month" >{this.props.months[this.props.currentDate.getMonth()]} </span>
          <span className= "year">{this.props.currentDate.getFullYear()}</span>
        </span>
        <span className= "navButtons col s6 right">
          <button>Prev</button>
          <button>Today</button>
          <button>Next</button>
        </span>

      </div>
    );
  }
}

export default Event;
