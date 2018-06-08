import React, { Component } from 'react';

class AddEvent extends Component {

handleSubmit = (event) => {
  event.preventDefault()
  this.props.saveEvent()
}

handleInputChange = (event) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  this.props.updateInputChange(name,value)
}

createElements() {
  if (this.props.addEvent) {
    return (
    <div className="row">
      <h6>New Event for {this.props.months[this.props.addEventDate.month]} {this.props.addEventDate.date}
      </h6>
      <form className="col s12"
            onSubmit= {this.handleSubmit}>
        <label>
          Description:
          <input type="text" name="description" onChange={this.handleInputChange} value={this.props.description} />
        </label>
        <label>
          Start Time (24-hr):
          <input type="text" name="startTime" placeholder="HH:MM" onChange={this.handleInputChange} value={this.props.startTime}/>
        </label>
        <label>
          End Time (24-hr):
          <input type="text" name="endTime" placeholder="HH:MM" onChange={this.handleInputChange} value={this.props.endTime}/>
        </label>
        <input type="submit" value="Submit" />
      </form>

    </div>
    )
  } else {
    return (
      <div className="col s3 ">
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
