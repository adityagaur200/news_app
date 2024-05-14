import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';

function App() {
  return (
    <>
    <NavBar/>
    <News pageSize="8"/>
    </>
  );
}

export default App;
