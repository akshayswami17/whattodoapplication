
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todotable from './components/Todotable';
import Tabledata from './components/Tabledata';

function App() {
  return (
    <>
    <center >
    <div ><h1 className='to-do-container'>To Do List</h1></div>
    <Todotable></Todotable>
    <Tabledata></Tabledata>
    
    </center>

    
    </>
  );
}

export default App;
