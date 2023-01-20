import './App.css';
import Dropdown from './Dropdown';

function App() {
  return (
    <div>
      <Dropdown list={["option 1", "option 2", "option 3", "option 4"]} multiSelect={true}/>
      {/* <Dropdown list={["option 1", "option 2", "option 3", "option 4"]} multiSelect={false}/> */}
    </div>
  );
}

export default App;
