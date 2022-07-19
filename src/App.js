import Header from './Header';
import './App.css';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Category from './Category';
import Home from './Home';
import CatigoryDescription from './CatigoryDescription';
import Error from './Error';


function App() {
  return (


     <Router>
     <Header/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route  path  ='/about' element= {<About/>} />
                    <Route   path  ='/cat' element= {<Category/>} />
                    <Route   path  ='/cat/:categoryName' element= {<CatigoryDescription/>} />
                    <Route   path = '*' element = {<Error/>}> </Route>

                </Routes>

     <Footer/>      

            </Router>

  
  );
}

export default App;
