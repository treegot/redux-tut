import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
       {/* <h1>App Component</h1> */}
       <User data= {{name :"Sandip kumar",age:"26"}}/>
    </div>
  );
}

export default App;
