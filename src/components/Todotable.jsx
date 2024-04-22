import React, { Component } from 'react'
import '../Styles/Todotable.css';
export class Todotable extends Component {
  render() {
    return (
      <div>
        <div class="container text-center">
  
  <div class="row">
    <div class="col-6">
    <input type="text" id="textInput" placeholder="Type something..."/></div>
    <div class="col-4"><input type="date" id="dateInput" /></div>
    <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
  </div>
</div>
    </div>
    )
  }
}

export default Todotable