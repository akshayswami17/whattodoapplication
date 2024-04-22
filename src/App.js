
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <center >
    <div ><h1 className='to-do-container'>To Do List</h1></div>
    <div class="container text-center">
  
  <div class="row">
    <div class="col-6">
    <input type="text" id="textInput" placeholder="Type something..."/></div>
    <div class="col-4"><input type="date" id="dateInput" /></div>
    <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
  </div>
</div>
    
    </center>

    
    </>
  );
}

export default App;
