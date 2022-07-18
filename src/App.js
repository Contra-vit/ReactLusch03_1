import Header from './Header';
import './App.css';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About'
import Category from './Category'
import Home from './Home'




function App() {
  return (


     <Router>
     <Header/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route  path  ='/about' element= {<About/>} />
                    <Route   path  ='/cat' element= {<Category/>} />
                </Routes>

     <Footer/>      

            </Router>

  
  );
}

export default App;
