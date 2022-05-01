
import './App.css';
import Addtask from './components/addtask';
import Listtask from './components/Listtask';
function App() {
  return (
    <div className="App">
   
  <h3>to do app</h3> 
      <Addtask />
      <Listtask />
  
  </div>
  );
}

export default App;
