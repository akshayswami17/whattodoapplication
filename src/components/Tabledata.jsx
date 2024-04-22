import React, { Component } from 'react'

export class Tabledata extends Component {
    render() {
        let tasks = ["Wekup", "Gym", "Shopping", "Dinner", "Walk"];
        let time = ["05:30", "06:30", "05:30", "07:30", "09:30"];
        let button = <button type="button" class="btn btn-success">Add</button> 
        return (

            
                <div class="container text-center">

                    <div class="row">
                        <div class="col-6">
                            <ul>{tasks.map((task) => <li>{task}</li>)}</ul>
                            </div>
                        <div class="col-4"><ul>{time.map((task) => <li>{task}</li>)}</ul></div>
                        <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
                    </div>
                </div>
                )
  }
}

                export default Tabledata