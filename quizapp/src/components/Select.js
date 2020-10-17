import React, { Component } from 'react'

 class Select extends Component {

  render() {
    return (
      <div>
          <label>Difficulty
        <select className="selection">
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
        </select>
        </label>
        <br/>
        <label>Category
        <select className="selection">
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
        </select>
        </label>
      </div>
    )
  }
}

export default Select
