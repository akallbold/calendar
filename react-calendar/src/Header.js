import React, { Component } from 'react';

class Header extends Component {

handlePrevMonth = () => {
  console.log("prev month")
}

handleToday = () => {
  console.log("today")
}

handleNextMonth = () => {
  console.log("next month")
}


  render() {
    // debugger
    return (
      <div className= "row">
        <span className= "col s6 left">
          <span className= "month" >{this.props.months[this.props.currentDate.getMonth()]} </span>
          <span className= "year">{this.props.currentDate.getFullYear()}</span>
        </span>
        <span className= "navButtons col s6 right">
          <button onClick={this.handlePrevMonth}>Prev</button>
          <button onClick={this.handleToday}>Today</button>
          <button onClick={this.handleNextMonth}>Next</button>
        </span>

      </div>
    );
  }
}

export default Header;
