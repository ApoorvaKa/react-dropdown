import './App.css';
import Dropdown from './Dropdown';

var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

function App() {
  return (
    <div className="App">
      <Dropdown list={month} multiSelect={true} title= "Multi-Select" />
      <Dropdown list={["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"]} multiSelect={false} title= "Single Select"/>
    </div>
  );
}

export default App;
