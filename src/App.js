import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter as Router,
   Route,
   Routes
   } from 'react-router-dom';

function App() {
  return (
   
    <Router>
      <>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<News key="general" pageSize="8" country="in" category="general"/>}></Route>
      <Route exact path='/general' element={<News key="general" pageSize="8" country="in" category="general"/>}></Route>
      <Route exact path='/business' element={<News key="business" pageSize="8" country="in" category="business"/>}></Route>
      <Route exact path='/entertainment' element={<News key="entertainment" pageSize="8" country="in" category="entertainment"/>}></Route>
      <Route exact path='/sport'element={<News key="sport" pageSize="8" country="in" category="sport"/>}></Route>
      <Route exact path='/technology' element={<News key="technology" pageSize="8" country="in" category="technology"/>}></Route>
      <Route exact path='/health' element={<News key="health" pageSize="8" country="in" category="health"/>}></Route>
      <Route exact path='/science' element={<News key="science" pageSize="8" country="in" category="science"/>}></Route>
      
       {/* <Route exact path='/us/general'><News pageSize="8" country="us" category="general"/></Route>
      <Route exact path='/us/business'><News pageSize="8" country="us" category="business"/></Route>
      <Route exact path='/us/entertainment'><News pageSize="8" country="us" category="entertainment"/></Route>
      <Route exact path='/us/sport'><News pageSize="8" country="us" category="sport"/></Route>
      <Route exact path='/us/technology'><News pageSize="8" country="us" category="technology"/></Route>
      <Route exact path='/us/health'><News pageSize="8" country="us" category="health"/></Route>
      <Route exact path='/us/science"'><News pageSize="8" country="us" category="science"/></Route>  */}

      {/* <Route exact path='/india/general'><News pageSize="8" country="in" category="general"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="business"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="entertainment"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="sport"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="technology"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="health"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="science"/></Route>

      <Route exact path='/india/general'><News pageSize="8" country="in" category="general"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="business"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="entertainment"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="sport"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="technology"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="health"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="science"/></Route>

      <Route exact path='/india/general'><News pageSize="8" country="in" category="general"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="business"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="entertainment"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="sport"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="technology"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="health"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="science"/></Route>

      <Route exact path='/india/general'><News pageSize="8" country="in" category="general"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="business"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="entertainment"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="sport"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="technology"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="health"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="science"/></Route>

      <Route exact path='/india/general'><News pageSize="8" country="in" category="general"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="business"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="entertainment"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="sport"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="technology"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="health"/></Route>
      <Route exact path='/'><News pageSize="8" country="in" category="science"/></Route> */}
    </Routes>
    </>
    </Router>
    
  );
}

export default App;
