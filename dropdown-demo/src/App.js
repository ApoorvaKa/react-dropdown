import './App.css';
import Dropdown from './Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown list={["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"]} multiSelect={true} title= "Multi-Select" />
      <Dropdown list={["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"]} multiSelect={false} title= "Single Select"/>
    </div>
  );
}

export default App;
