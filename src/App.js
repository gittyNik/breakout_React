import logo from './logo.svg';
import './App.css';
import Comp1 from './comp/comp1';

let names = ['Sam', 'Sammy', 'DN', 'JB', 'Dean', 'Red Reddinton']
function App() {
  return (
    <div className="App">
      {
        names.map(name => {
          return (<Comp1 name={name} />)
        })
      }
    </div>
  );
}

export default App;
