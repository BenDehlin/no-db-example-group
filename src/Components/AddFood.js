import React, { Component } from "react"

class AddFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }

  handleChange = (value) => {
    this.setState({ name: value })
  }

  saveFood = () => {
    this.props.addFood(this.state.name)
    this.setState({ name: "" })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button onClick={this.saveFood}>Add Food</button>
      </div>
    )
  }
}

export default AddFood
