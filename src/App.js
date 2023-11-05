import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleView from './pages/SingleView';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
           <Header></Header>
<Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:mobile' element={ <SingleView></SingleView>}></Route>
  
</Routes>
     
      <Footer></Footer>

    </div>
  );
}

export default App;
