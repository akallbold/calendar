import React, { Component } from 'react';
// import TimeInput from 'react-time-input';

class AddEvent extends Component {

handleSubmit() {
  console.log("Submitted")
}

createElements() {
  // debugger
  if (this.props.addEvent) {
    return (

    <div className="row">
      <h6>New Event for {this.props.months[this.props.addEventDate.month]} {this.props.addEventDate.date}</h6>
      <form className="col s12"
            onSubmit= {this.handleSubmit}>
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <label>
          Start Time:
          <input type="text" name="startTime" />
        </label>
        <label>
          End Time:
          <input type="text" name="endTime" />
        </label>

      </form>

    </div>
    )
  } else {
    return (
      <div className="col s3 ">
        Hello
      </div>
    );
  }
}


  render() {
    // console.log("props", this.props)
    return (
      this.createElements()
    )
  }
}

export default AddEvent;
