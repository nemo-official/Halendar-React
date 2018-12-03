import React, { Component } from 'react'

class AddHal extends Component {
  sate = {
    Title: null,
    Time: null,
    Place: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) =>{
  e.preventDefault();
  this.props.addHal(this.state);
}
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Title">Title:</label>
          <input type="text" id="Title" onChange={this.handleChange} />
<br></br>
          <label htmlFor="Time">Time:</label>
          <input type="text" id="Time" onChange={this.handleChange} />
          <label htmlFor="Place">Place:</label>
          <input type="text" id="Place" onChange={this.handleChange} />
<br></br>
          <button> Submit </button>
          </form>
          </div>
        )
  }
}

export default AddHal
