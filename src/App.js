
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import ProtectedRoutes from './pages/protecedroutes';
import PageLoading from './pages/pageloading';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Routes>
          <Route path='/' element={<ProtectedRoutes><Home></Home></ProtectedRoutes>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/loading' element={<PageLoading/>}/>
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
