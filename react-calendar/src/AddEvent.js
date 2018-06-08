import React, { Component } from 'react';

class AddEvent extends Component {

handleSubmit() {
  console.log("Submitted")
}

createElements() {
  if (this.props.addEvent) {
    return (

    <div className="row">
      <form className="col s12"
            onSubmit= {this.handleSubmit}>
        <label>
          Description:
          <input type="text" name="description" />
        </label>

      <input type="submit" value="Submit" />
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
    return (
      this.createElements()
    )
  }
}

export default AddEvent;
