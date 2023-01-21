import './App.css';
import Dropdown from './Dropdown';

var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function App() {
  return (
    <div className="App">
      <Dropdown list={month} multiSelect={true} title= "Multi-Select" />
      <Dropdown list={days} multiSelect={false} title= "Single Select"/>
    </div>
  );
}

export default App;
