
import './App.css';
import Calendar from './Components/Calander/Calender';
import SideBar from './Components/Sidebar/SideBar';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <SideBar />
      <Calendar />
    </div>
  );
}

export default App;
