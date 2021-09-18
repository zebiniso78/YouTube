import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
