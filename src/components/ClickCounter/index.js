// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="about">Click the button to increase the count</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrement}>
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
